// İletişim formu gönderimini yakalayıp Netlify Forms'a iletir.
// React formu kendi başarı mesajını gösterir; biz sadece veriyi Netlify'a POST ederiz.
(function () {
  document.addEventListener(
    'submit',
    function (e) {
      var form = e.target;
      if (!form || typeof form.querySelector !== 'function') return;
      // Yalnızca iletişim formu: hem e-posta hem mesaj alanı olmalı.
      if (!form.querySelector('[name="email"]') || !form.querySelector('[name="message"]')) return;
      try {
        var params = new URLSearchParams();
        params.append('form-name', 'contact');
        new FormData(form).forEach(function (value, key) {
          params.append(key, value);
        });
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        });
      } catch (err) {
        /* sessizce geç */
      }
      // preventDefault etmiyoruz; React kendi UI'ını yönetsin.
    },
    true /* capture: React'ten önce çalışır */
  );
})();
