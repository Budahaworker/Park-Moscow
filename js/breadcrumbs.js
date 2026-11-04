// Хлебные крошки живут в #site-breadcrumbs (вне <main>) и обновляются роутером.
export function renderBreadcrumbs(route) {
  const nav = document.getElementById('site-breadcrumbs');
  const list = nav?.querySelector('[data-breadcrumbs-list]');
  if (!nav || !list) return;

  if (!route.crumbs.length) {            // главная — без крошек
    nav.hidden = true;
    list.replaceChildren();
    return;
  }

  const items = [...route.crumbs, { title: route.title }];
  list.replaceChildren(...items.map((c, i) => {
    const li = document.createElement('li');
    li.className = 'breadcrumbs__item';
    if (c.href) {
      const a = document.createElement('a');
      a.className = 'breadcrumbs__link';
      a.href = c.href;
      a.textContent = c.title;
      li.append(a);
    } else {
      li.textContent = c.title;
      li.setAttribute('aria-current', 'page');
    }
    return li;
  }));
  nav.hidden = false;
}
