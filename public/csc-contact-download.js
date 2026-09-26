// İletişim sayfasına "İlaç Talep Formu" indirme kartı ekler (5 dilli).
// React DOM'una müdahaleyi en aza indirir: kartı iletişim formunun üstüne
// yerleştirir, sayfa değişince/dış silinince yeniden ekler.
(function () {
  var KEY = 'csc-language-v4';
  var FILE = '/CSC-Ilac-Talep-Formu.docx';
  var TXT = {
    en: { title: 'Medicine Request Form', desc: 'To request medicines, download the form below, fill it in, stamp and sign it, and send it to info@csc-tr.com.', btn: 'Download Form (Word)' },
    tr: { title: 'İlaç Talep Formu', desc: 'İlaç talebinde bulunmak için aşağıdaki formu indirin, doldurun, kaşeleyip imzalayın ve info@csc-tr.com adresine gönderin.', btn: 'Formu İndir (Word)' },
    ru: { title: 'Форма запроса на лекарства', desc: 'Чтобы запросить лекарства, скачайте форму ниже, заполните её, поставьте печать и подпись и отправьте на info@csc-tr.com.', btn: 'Скачать форму (Word)' },
    kz: { title: 'Дәрі сұрау формасы', desc: 'Дәрі сұрау үшін төмендегі форманы жүктеп алыңыз, толтырыңыз, мөр мен қолыңызды қойып, info@csc-tr.com мекенжайына жіберіңіз.', btn: 'Форманы жүктеу (Word)' },
    az: { title: 'Dərman Sifariş Formu', desc: 'Dərman sifariş etmək üçün aşağıdakı formu yükləyin, doldurun, möhür və imza qoyub info@csc-tr.com ünvanına göndərin.', btn: 'Formu Yüklə (Word)' },
  };
  function lang() { try { var l = localStorage.getItem(KEY); return TXT[l] ? l : 'en'; } catch (e) { return 'en'; } }
  function onContact() { return (location.hash || '').indexOf('iletisim') > -1; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function build() {
    var t = TXT[lang()];
    var card = document.createElement('div');
    card.id = 'csc-talep-card';
    card.setAttribute('data-lang', lang());
    card.style.cssText = 'margin:0 0 24px;padding:20px 22px;background:#fff;border:1px solid #D0D8E4;border-left:4px solid #00A86B;border-radius:16px;box-shadow:0 6px 18px rgba(10,92,142,.07);font-family:Inter,system-ui,sans-serif;display:flex;flex-wrap:wrap;align-items:center;gap:16px;justify-content:space-between';
    card.innerHTML =
      '<div style="flex:1;min-width:230px">' +
      '<div style="font-weight:700;font-size:17px;color:#0A5C8E;margin-bottom:6px">📄 ' + esc(t.title) + '</div>' +
      '<div style="font-size:14px;color:#5A6A7E;line-height:1.55">' + esc(t.desc) + '</div>' +
      '</div>' +
      '<a href="' + FILE + '" download style="flex-shrink:0;display:inline-flex;align-items:center;gap:8px;background:#00A86B;color:#fff;font-weight:600;font-size:14px;text-decoration:none;padding:12px 20px;border-radius:10px">⬇ ' + esc(t.btn) + '</a>';
    return card;
  }

  function place() {
    if (!onContact()) return;
    var existing = document.getElementById('csc-talep-card');
    if (existing) {
      if (existing.getAttribute('data-lang') !== lang()) {
        var repl = build();
        existing.parentNode.replaceChild(repl, existing);
      }
      return;
    }
    var msg = document.querySelector('form [name="message"]');
    if (!msg) return;
    var formEl = msg.closest('form');
    if (!formEl || !formEl.parentNode) return;
    // Tam genişlik: iki sütunlu grid'in üstüne yerleştir (yoksa formun kartının üstüne)
    var anchor = (formEl.closest && formEl.closest('[class*="grid-cols"]')) || null;
    if (!anchor) {
      anchor = formEl; var p = formEl.parentElement, hops = 0;
      while (p && hops < 4) { if (p.className && /(rounded|bg-white|card)/.test(p.className)) { anchor = p; break; } p = p.parentElement; hops++; }
    }
    if (!anchor.parentNode) anchor = formEl;
    anchor.parentNode.insertBefore(build(), anchor);
  }

  var scheduled = false;
  function schedule() { if (scheduled) return; scheduled = true; setTimeout(function () { scheduled = false; try { place(); } catch (e) {} }, 120); }

  try {
    var obs = new MutationObserver(schedule);
    obs.observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
  window.addEventListener('hashchange', schedule);
  window.addEventListener('storage', schedule);
  if (document.readyState !== 'loading') schedule(); else document.addEventListener('DOMContentLoaded', schedule);
})();
