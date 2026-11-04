// Таблица маршрутов. Крошки строятся из неё и не зависят от содержимого <main>.
const HOME = { title: 'Главная', href: '#/' };
const stub = 'pages/stub.html';

export const routes = {
  '/':               { page: 'pages/home.html',   title: 'Парки Москвы', crumbs: [] },
  '/afisha':         { page: 'pages/afisha.html', title: 'Афиша',        crumbs: [HOME] },
  '/about':          { page: stub, title: 'Об организации',  crumbs: [HOME] },
  '/media':          { page: stub, title: 'Медиа',           crumbs: [HOME] },
  '/news':           { page: stub, title: 'Новости',         crumbs: [HOME] },
  '/partners':       { page: stub, title: 'Стать партнером', crumbs: [HOME] },
  '/business':       { page: stub, title: 'Открой бизнес',   crumbs: [HOME] },
  '/parks':          { page: stub, title: 'К любимому парку',crumbs: [HOME] },
  '/infrastructure': { page: stub, title: 'Инфраструктура',  crumbs: [HOME] },
  '/radio':          { page: stub, title: 'Радио Парки',     crumbs: [HOME] },
  '/podcasts':       { page: stub, title: 'Подкасты',        crumbs: [HOME] },
  '/search':         { page: stub, title: 'Поиск по сайту',  crumbs: [HOME] },
};

export const notFound = { page: stub, title: 'Страница не найдена', crumbs: [HOME] };
