import { routes, notFound } from './routes.js';
import { includeAll } from './includes.js';
import { renderBreadcrumbs } from './breadcrumbs.js';
import { initPage } from './page.js';

const main = () => document.getElementById('page-content');
const currentPath = () => (location.hash.replace(/^#/, '') || '/').split('?')[0];

async function render() {
  const path = currentPath();
  const route = routes[path] ?? notFound;

  try {
    const res = await fetch(route.page);
    if (!res.ok) throw new Error(`${route.page}: ${res.status}`);
    const html = await res.text();

    // Перерисовывается ТОЛЬКО <main>. Хедер, крошки и футер не затрагиваются.
    main().innerHTML = html;
    await includeAll(main());
  } catch (e) {
    console.error('[router]', e);
    main().innerHTML = '<p class="page-stub__text container">Не удалось загрузить страницу.</p>';
  }

  main().querySelectorAll('[data-page-title]').forEach((el) => (el.textContent = route.title));
  document.title = path === '/' ? 'Парки Москвы' : `${route.title} — Парки Москвы`;

  renderBreadcrumbs(route);
  markActiveNav(path);
  initPage(main());

  window.scrollTo({ top: 0 });
}

function markActiveNav(path) {
  document.querySelectorAll('#site-header .main-nav__link').forEach((a) => {
    const active = a.getAttribute('href') === `#${path}`;
    active ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });
}

export function startRouter() {
  window.addEventListener('hashchange', render);
  return render();
}
