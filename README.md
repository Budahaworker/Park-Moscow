# Парки Москвы — главная страница

Чистый HTML + CSS + JS (ES-модули), без сборщика.

## Запуск
Страница подгружает partial-файлы через `fetch`, поэтому нужен любой статический сервер:

    npm start            # http://localhost:8080
    # или: python3 -m http.server 8080

## Структура
    index.html              оболочка: 4 независимые зоны
    partials/
      header.html           топбар (радио, подкасты, поиск, слабовидящие) + главное меню
      breadcrumbs.html      хлебные крошки
      footer.html           подвал
    pages/                  контент страниц (грузится ТОЛЬКО в <main id="page-content">)
    sections/               секции главной (hero, spotlight, interests, afisha, ...)
    css/                    tokens → base → components → select2-theme → header/breadcrumbs/footer → sections/*
    js/                     includes, router, routes, breadcrumbs, header, slider, hero, selects, toggles, subscribe
    assets/                 img (webp), icons, decor, logos (svg)
