// Переключатели aria-pressed: чипы, теги-фильтры, дни календаря.
export function initToggles(root) {
  // множественный выбор
  root.querySelectorAll('.chip, .tag--filter').forEach((btn) => {
    if (btn.dataset.ready) return;
    btn.dataset.ready = '1';
    btn.addEventListener('click', () => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('aria-pressed') !== 'true'));
    });
  });

  // одиночный выбор дня
  root.querySelectorAll('.calendar__days').forEach((list) => {
    if (list.dataset.ready) return;
    list.dataset.ready = '1';
    list.addEventListener('click', (e) => {
      const day = e.target.closest('.calendar__day');
      if (!day) return;
      const was = day.getAttribute('aria-pressed') === 'true';
      list.querySelectorAll('.calendar__day').forEach((d) => d.setAttribute('aria-pressed', 'false'));
      day.setAttribute('aria-pressed', String(!was));
    });
  });
}
