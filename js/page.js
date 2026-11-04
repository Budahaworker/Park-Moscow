// Инициализация интерактивных компонентов внутри только что отрисованного контента.
import { initSelects } from './selects.js';
import { initSliders } from './slider.js';
import { initHero } from './hero.js';
import { initToggles } from './toggles.js';
import { initSubscribe } from './subscribe.js';

export function initPage(root) {
  initSelects(root);
  initSliders(root);
  initHero(root);
  initToggles(root);
  initSubscribe(root);
}
