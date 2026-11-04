import { includeAll } from './includes.js';
import { initHeader } from './header.js';
import { startRouter } from './router.js';

// 1) Каркас: хедер, крошки, футер — каждый из своего файла.
await includeAll(document);
initHeader();

// 2) Контент страницы — только внутри <main id="page-content">.
await startRouter();
