/* World Tales startup check.
   Diagnostic only: it does nothing when the app starts normally.
   If the app cannot start (for example a file was not uploaded), it shows a message instead of a blank page. */
(function () {
  var errors = [];

  // Script errors and files that failed to load (the third argument "true" also catches missing files).
  addEventListener('error', function (e) {
    var t = e.target;
    if (t && t !== window && (t.src || t.href)) {
      errors.push('File not found or blocked: ' + (t.src || t.href));
    } else {
      errors.push((e.message || 'Script error') + (e.lineno ? ' (line ' + e.lineno + ')' : ''));
    }
  }, true);

  addEventListener('load', function () {
    var app = document.getElementById('app');
    if (app && app.children.length) return;

    var box = document.createElement('div');
    box.setAttribute('role', 'alert');
    box.style.cssText = 'max-width:640px;margin:40px auto;padding:20px;border:2px solid #b08a3a;border-radius:6px;font:16px/1.6 system-ui,sans-serif';

    var lines = [
      'World Tales could not start.',
      typeof DATA === 'undefined'
        ? 'The story data (js/data.js) did not load. Make sure the whole folder was uploaded, including the css, js and assets folders.'
        : 'The story data loaded, but the app code (js/app.js) stopped before it finished.',
      errors.length ? 'Details: ' + errors.slice(0, 5).join(' | ') : 'No error was reported. Try a hard refresh (Ctrl+Shift+R).',
      'تعذّر تشغيل التطبيق. تأكد من رفع المجلد كاملًا (index.html مع مجلدات css و js و assets).'
    ];
    lines.forEach(function (t) {
      var p = document.createElement('p');
      p.textContent = t;
      box.appendChild(p);
    });
    (app || document.body).appendChild(box);
  });
})();
