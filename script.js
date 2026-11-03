(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-nav');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.hidden = !open;
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();
