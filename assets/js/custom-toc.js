(() => {
  const mq = window.matchMedia("(min-width: 1200px)");

  const baseOptions = {
    contentSelector: ".content",
    ignoreSelector: "[data-toc-skip]",
    headingSelector: "h1, h2, h3, h4",
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 4,
  };

  function initToc() {
    if (!window.tocbot) return;

    const article = document.querySelector("main > article[data-toc='true']");
    if (!article) return;

    const tocSelector = mq.matches ? "#toc" : "#toc-popup-content";
    const tocContainer = document.querySelector(tocSelector);
    if (!tocContainer) return;

    window.tocbot.destroy();
    window.tocbot.init({
      ...baseOptions,
      tocSelector,
      headingsOffset: mq.matches ? 32 : 48,
    });
  }

  document.addEventListener("DOMContentLoaded", initToc);
  mq.addEventListener("change", initToc);
})();
