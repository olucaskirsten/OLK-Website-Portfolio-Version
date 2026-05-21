(function () {
  const transitionKey = "olkPageTransition";

  document.body.classList.add("page-is-transitioning");

  function getOverlay() {
    return document.querySelector(".page-transition");
  }

  function isInternalLink(link) {
    if (!link || !link.href) return false;

    const url = new URL(link.href, window.location.href);
    const currentUrl = new URL(window.location.href);

    if (url.origin !== window.location.origin) return false;
    if (link.target === "_blank") return false;
    if (link.hasAttribute("download")) return false;
    if (link.dataset.noTransition !== undefined) return false;
    if (url.protocol === "mailto:" || url.protocol === "tel:") return false;
    if (url.href.includes("wa.me")) return false;

    if (url.href === currentUrl.href) return false;
    if (url.pathname === currentUrl.pathname && url.hash) return false;

    return true;
  }

  function runEnterTransition() {
    document.body.classList.add("page-is-transitioning");

    const overlay = getOverlay();
    const shouldRunEnter = sessionStorage.getItem(transitionKey) === "true";

    if (!overlay || !shouldRunEnter) return;

    sessionStorage.removeItem(transitionKey);

    overlay.classList.add("is-active", "is-entering");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add("is-entering-out");
        document.documentElement.classList.remove("has-page-transition");
      });
    });

    setTimeout(() => {
      overlay.classList.remove("is-active", "is-entering", "is-entering-out");
      document.body.classList.remove("page-is-transitioning");
      document.documentElement.classList.remove("has-page-transition");

      window.dispatchEvent(new Event("olkTransitionComplete"));
    }, 1200);
  }

  function runExitTransition(url) {
    const overlay = getOverlay();

    if (!overlay) {
      window.location.href = url;
      return;
    }

    overlay.classList.add("is-active");

    requestAnimationFrame(() => {
      overlay.classList.add("is-exiting");
    });

    sessionStorage.setItem(transitionKey, "true");

    setTimeout(() => {
      window.location.href = url;
    }, 850);
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");

    if (!isInternalLink(link)) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;

    sessionStorage.setItem(
      "olkCursorPosition",
      JSON.stringify({
        x: event.clientX,
        y: event.clientY
      })
    );

    event.preventDefault();
    runExitTransition(link.href);

  });

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;

    const overlay = getOverlay();

    if (!overlay) return;

    overlay.classList.remove("is-active", "is-exiting", "is-entering", "is-entering-out");
    document.documentElement.classList.remove("has-page-transition");
  });

  document.addEventListener("DOMContentLoaded", runEnterTransition);
})();