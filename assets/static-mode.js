/* 2026-11-26: site moved to static hosting. Server features (accounts, detector, humanizer, support) are paused. */
(function(){
  var css = 'a[href^="/login"],a[href^="/signup"],a[href^="/account"],a[href^="../login"],a[href^="../signup"],a[href^="../account"]{display:none!important}' +
    '.np-static-note{background:#111827;color:#fff;font:500 14px/1.5 system-ui,-apple-system,sans-serif;text-align:center;padding:10px 16px}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  function note(){
    if (document.querySelector('.np-static-note')) return;
    var d = document.createElement('div'); d.className = 'np-static-note';
    d.textContent = 'neepora is under maintenance. The AI detector, humanizer and accounts are paused for now.';
    document.body.insertBefore(d, document.body.firstChild);
  }
  if (document.body) note(); else document.addEventListener('DOMContentLoaded', note);
  var p = location.pathname;
  if (/^\/(login|signup|account)(\/|$)/.test(p)) location.replace('/');
})();
