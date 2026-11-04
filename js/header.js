// Поведение хедера: бургер и версия для слабовидящих.
const KEY = 'parki:vision';

export function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const burger = header.querySelector('[data-burger]');
  burger?.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(open));
    header.classList.toggle('is-menu-open', open);
  });
  header.querySelectorAll('.main-nav__link').forEach((a) =>
    a.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      header.classList.remove('is-menu-open');
    }));

  const toggle = header.querySelector('[data-vision-toggle]');
  const apply = (on) => {
    document.documentElement.classList.toggle('is-vision', on);
    toggle?.setAttribute('aria-pressed', String(on));
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch { /* приватный режим */ }
  };
  let saved = false;
  try { saved = localStorage.getItem(KEY) === '1'; } catch { /* noop */ }
  apply(saved);
  toggle?.addEventListener('click', () => apply(toggle.getAttribute('aria-pressed') !== 'true'));
}
