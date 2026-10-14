// Ön işleme (prerender) + sitemap: `npm run build` sonrası çalıştırılır.
// Her sayfayı 5 dilde tarayıcıda açar, oluşan HTML'i dist/<yol>/index.html olarak kaydeder
// ve dist/sitemap.xml üretir. Böylece arama motorları (Yandex/Bing dahil) içeriği JS çalıştırmadan görür.
//   PLAYWRIGHT_CORE=/yol/playwright-core/index.js node scripts/prerender.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PW = process.env.PLAYWRIGHT_CORE || '/Users/nazgulkenjetay/.claude/skills/gstack/node_modules/playwright-core/index.js';
const { chromium } = (await import(PW)).default;

const DIST = path.resolve('dist');
const SITE = 'https://csc-tr.com';
const PORT = 4690;
const LANGS = ['en', 'tr', 'ru', 'kz', 'az'];
const HREFLANG = { en: 'en', tr: 'tr', ru: 'ru', kz: 'kk', az: 'az' };
const withLang = (p, l) => (l === 'en' ? p : p === '/' ? `/${l}` : `/${l}${p}`);
const STATIC = ['/', '/urunler', '/urunler/ilac', '/urunler/gida-takviyeleri', '/urunler/tibbi-sarf-malzemeleri',
  '/urunler/hasta-bebek-bezleri', '/urunler/tibbi-cihazlar', '/urunler/tibbi-testler', '/hizmetler', '/subeler',
  '/iletisim', '/blog', '/katalog', '/kurumsal', '/gizlilik', '/kullanim-sartlari', '/cerez-politikasi', '/kvkk'];

// 1) Bozulmamış uygulama kabuğu (SPA geri dönüşü için)
const shellPath = path.join(DIST, 'app-shell.html');
if (!fs.existsSync(shellPath)) fs.copyFileSync(path.join(DIST, 'index.html'), shellPath);
const shell = fs.readFileSync(shellPath);

const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const f = path.join(DIST, p);
  if (p !== '/' && fs.existsSync(f) && fs.statSync(f).isFile()) {
    res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
    return fs.createReadStream(f).pipe(res);
  }
  res.writeHead(200, { 'content-type': 'text/html' }); res.end(shell);
}).listen(PORT);

const browser = await chromium.launch({ channel: 'chrome' });
// Her işçinin kendi oturumu olmalı: ortak localStorage'da dil tercihi sayfalar arasında karışır.
async function newCtx() {
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  await ctx.addInitScript(() => {
    try {
      localStorage.setItem('csc-cookie-consent', 'rejected');   // çerez bandı görünmesin
      localStorage.setItem('csc-language-v4', 'en');            // dil yönlendirmesi tetiklenmesin
      sessionStorage.setItem('csc-health-approved', 'true');    // sağlık profesyoneli penceresi açılmasın
    } catch { /* yoksay */ }
  });
  // Görsel/video/font indirmeye gerek yok; HTML için yalnızca betik ve veri lazım
  await ctx.route(/\.(mp4|webm|jpg|jpeg|png|webp|gif|woff2?|ttf)(\?|$)/i, r => r.abort());
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  return ctx;
}

const errors = [];
async function render(ctx, url) {
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(`${url}: ${e.message}`));
  await page.goto(`http://localhost:${PORT}${url}`, { waitUntil: 'networkidle', timeout: 60000 });
  const expected = SITE + (url === '/' ? '/' : url);
  await page.waitForFunction(u => window.__SEO_READY__ === u, expected, { timeout: 20000 });
  const final = new URL(page.url()).pathname;
  if (final !== url) throw new Error(`yönlendirildi → ${final}`);
  await page.waitForTimeout(300);
  let html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
  await page.close();
  // Animasyon başlangıç stilleri (opacity:0, gizli, kaydırılmış) içeriği görünmez kılmasın
  html = html.replace(/style="([^"]*)"/g, (m, st) => {
    const cleaned = st.replace(/(^|;)\s*(opacity:\s*0(\.\d+)?|visibility:\s*hidden|transform:\s*[^;]+|translate:\s*[^;]+)\s*(?=;|$)/g, '$1')
      .replace(/;{2,}/g, ';').replace(/^\s*;|;\s*$/g, '').trim();
    return cleaned ? `style="${cleaned}"` : '';
  });
  // Netlify '/ru/blog' adresini '/ru/blog.html' dosyasından yönlendirmesiz sunar (klasör/index.html sonuna '/' ekletir)
  const out = url === '/' ? path.join(DIST, 'index.html') : path.join(DIST, url.slice(1) + '.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return html.length;
}

// 2) Blog yazılarının adreslerini İngilizce blog sayfasından topla
const bctx = await newCtx();
const bp = await bctx.newPage();
await bp.goto(`http://localhost:${PORT}/blog`, { waitUntil: 'networkidle', timeout: 60000 });
const blogPaths = [...new Set(await bp.$$eval('a[href^="/blog/"]', as => as.map(a => a.getAttribute('href'))))];
const blogDates = Object.fromEntries(await bp.$$eval('a[href^="/blog/"]', as => as.map(a => [a.getAttribute('href'), (a.textContent || '').match(/\d{4}-\d{2}-\d{2}/)?.[0] || ''])));
await bp.close(); await bctx.close();
console.log(`${blogPaths.length} blog yazısı bulundu`);

const logical = [...STATIC, ...blogPaths];
const jobs = logical.flatMap(p => LANGS.map(l => withLang(p, l)));
let done = 0, bytes = 0;
const queue = [...jobs];
await Promise.all(Array.from({ length: 4 }, async () => {
  const ctx = await newCtx();
  while (queue.length) {
    const u = queue.shift();
    try { bytes += await render(ctx, u); } catch (e) { errors.push(`${u}: ${e.message.split('\n')[0]}`); }
    if (++done % 25 === 0) console.log(`${done}/${jobs.length}`);
  }
  await ctx.close();
}));
await browser.close(); server.close();

// 3) sitemap.xml (her adres için 5 dil alternatifi)
const today = new Date().toISOString().slice(0, 10);
const esc = s => s.replace(/&/g, '&amp;');
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const p of logical) {
  const lastmod = blogDates[p] || today;
  const alts = LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${esc(SITE + withLang(p, l))}"/>`).join('\n')
    + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(SITE + p)}"/>`;
  for (const l of LANGS) {
    xml += `  <url>\n    <loc>${esc(SITE + withLang(p, l))}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alts}\n  </url>\n`;
  }
}
xml += '</urlset>\n';
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);

console.log(`Bitti: ${done} sayfa, ${(bytes / 1e6).toFixed(1)} MB HTML, sitemap ${logical.length * LANGS.length} adres`);
if (errors.length) { console.log('HATALAR:\n' + errors.join('\n')); process.exitCode = 1; }
