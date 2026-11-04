// Загрузчик HTML-фрагментов.
//   data-include="path"       — заменяет сам элемент содержимым файла (секции страниц)
//   data-include-into="path"  — кладёт содержимое внутрь элемента (хедер, крошки, футер)
const cache = new Map();

async function load(url) {
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then((r) => {
      if (!r.ok) throw new Error(`${url}: ${r.status}`);
      return r.text();
    }));
  }
  return cache.get(url);
}

export async function includeAll(root = document) {
  const nodes = root.querySelectorAll('[data-include], [data-include-into]');
  if (!nodes.length) return;

  await Promise.all([...nodes].map(async (node) => {
    const into = node.hasAttribute('data-include-into');
    const url = node.getAttribute(into ? 'data-include-into' : 'data-include');
    try {
      const html = await load(url);
      if (into) {
        node.removeAttribute('data-include-into');
        node.innerHTML = html;
      } else {
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        node.replaceWith(tpl.content);
      }
    } catch (e) {
      console.error('[include]', e);
    }
  }));

  // фрагменты могут содержать вложенные include
  await includeAll(root);
}
