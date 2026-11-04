// Все селекторы сайта — только Select2 (jQuery-плагин, подключён в index.html).
export function initSelects(root) {
  const $ = window.jQuery;
  if (!$ || !$.fn.select2) {
    console.warn('Select2 не загружен');
    return;
  }

  $(root).find('select.js-select2').each(function () {
    const $el = $(this);
    if ($el.hasClass('select2-hidden-accessible')) return;

    const variant = $el.data('variant') || 'pill';
    $el.select2({
      width: '100%',
      minimumResultsForSearch: Infinity,
      dropdownParent: $el.parent(),
      selectionCssClass: `sel sel--${variant}`,
      dropdownCssClass: `sel-drop sel-drop--${variant}`,
    });
  });
}
