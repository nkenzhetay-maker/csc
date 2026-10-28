// Seçilen blog yazıları için Supabase'e eklenecek SQL üretir (herkese açık içerik; fiyat yok).
//   npx -y tsx scripts/gen-blog-sql.ts 25,26,27,28 supabase/seed-blog-25-28.sql
import { writeFileSync } from 'node:fs';
import { blogEntries } from '../src/data/blogContent';

const ids = process.argv[2].split(',').map(Number);
const out = process.argv[3];
const q = (s: unknown) => `'${String(s ?? '').replace(/'/g, "''")}'`;
const rows = blogEntries.filter(b => ids.includes(b.id)).map(b =>
  `insert into public.blog_yazilari (id,kategori,tarih,okuma_suresi,gorsel,icerik) values (${b.id},${q(b.category)},${q(b.date)},${Number(b.readTime) || 5},${q(b.image)},${q(JSON.stringify(b.t))}::jsonb) on conflict (id) do nothing;`);
rows.push(`select setval(pg_get_serial_sequence('public.blog_yazilari','id'), (select max(id) from public.blog_yazilari)); select count(*) as blog from public.blog_yazilari;`);
writeFileSync(out, '-- CSC blog yazıları (herkese açık içerik)\n' + rows.join('\n') + '\n');
console.log(rows.length - 1, 'yazı');
