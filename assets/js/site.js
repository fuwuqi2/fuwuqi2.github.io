/* fuwuqi2 · shared site behavior
   - renders listing rows from a data array (DEALS)
   - powers the header search box (filter by keyword)
   - sets footer year + active nav state
   - no frameworks, no dependencies, ~3 KB */
(function () {
  'use strict';

  /* mount listing rows into every [data-list] container */
  function mountLists() {
    document.querySelectorAll('[data-list]').forEach(function (host) {
      var key = host.getAttribute('data-list');
      var items = (typeof DEALS !== 'undefined' && DEALS[key]) ? DEALS[key] : [];
      var html = items.map(function (d) {
        var badges = '';
        if (d.badges) {
          badges = d.badges.map(function (b) {
            return '<span class="badge badge--' + (b.t || '') + '">' + esc(b.x) + '</span>';
          }).join(' ');
        }
        return (
          '<article class="row" data-name="' + esc((d.name + ' ' + d.desc + ' ' + (d.tags || '')).toLowerCase()) + '">' +
          '<div class="row-ico">' + (d.icon || '🔗') + '</div>' +
          '<div class="row-main">' +
          '<div class="row-title"><a href="' + esc(d.link) + '" rel="noopener nofollow sponsored" target="_blank">' + esc(d.name) + '</a> ' + badges + '</div>' +
          '<div class="row-desc">' + esc(d.desc) + '</div>' +
          '</div>' +
          '<a class="row-go" href="' + esc(d.link) + '" rel="noopener nofollow sponsored" target="_blank">前往 →</a>' +
          '</article>'
        );
      }).join('');
      host.innerHTML = html;
    });
  }

  /* header search: filter visible rows across all listing hosts */
  function bindSearch() {
    var input = document.querySelector('.site-search input');
    if (!input) return;
    var run = function () {
      var q = input.value.trim().toLowerCase();
      document.querySelectorAll('.row').forEach(function (row) {
        var hay = (row.getAttribute('data-name') || '') + ' ' + row.textContent.toLowerCase();
        var show = !q || hay.indexOf(q) !== -1;
        row.style.display = show ? '' : 'none';
      });
      var visible = document.querySelectorAll('.row:not([style])');
      var counter = document.getElementById('search-count');
      if (counter) counter.textContent = visible.length + ' 条结果';
    };
    input.addEventListener('input', run);
    var hint = document.getElementById('search-count');
    if (hint) hint.textContent = '试试「阿里云」「备案」「新客」';
  }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function markActiveNav() {
    var path = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var target = href.split('/').pop();
      if (href && (target === path || (path === '' && target === 'index.html'))) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  document.addEventListener('DOMContentLoaded', function () {
    mountLists();
    bindSearch();
    setYear();
    markActiveNav();
  });
})();
