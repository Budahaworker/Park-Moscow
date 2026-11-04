// Слайдер главного баннера (fade, без внешних библиотек).
export function initHero(root) {
  const hero = root.querySelector('[data-hero]');
  if (!hero || hero.dataset.ready) return;
  hero.dataset.ready = '1';

  const slides = [...hero.querySelectorAll('[data-hero-slide]')];
  const bar = hero.querySelector('[data-hero-bar]');
  const current = hero.querySelector('[data-hero-current]');
  const total = hero.querySelector('.hero__counter-total');
  let index = 0;

  if (total) total.textContent = ` — ${String(slides.length).padStart(2, '0')}`;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const on = n === index;
      s.hidden = !on;
      s.classList.toggle('is-active', on);
    });
    if (current) current.textContent = String(index + 1).padStart(2, '0');
    if (bar) bar.style.width = `${((index + 1) / slides.length) * 100}%`;
  };

  hero.querySelector('[data-hero-prev]')?.addEventListener('click', () => show(index - 1));
  hero.querySelector('[data-hero-next]')?.addEventListener('click', () => show(index + 1));
  show(0);
}
