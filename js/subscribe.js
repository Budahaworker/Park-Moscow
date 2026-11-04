export function initSubscribe(root) {
  const form = root.querySelector('[data-subscribe]');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = '1';

  const status = form.querySelector('[data-subscribe-status]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.elements.email;
    const ok = input.checkValidity() && input.value.trim() !== '';
    status.textContent = ok ? 'Спасибо! Проверьте почту, чтобы подтвердить подписку.' : 'Введите корректный e-mail.';
    status.classList.toggle('is-error', !ok);
    // TODO: отправка на бэкенд
  });
}
