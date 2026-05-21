(function () {
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isTouchDevice || prefersReducedMotion) return;

  const dot = document.createElement("div");
  const ring = document.createElement("div");

  dot.className = "custom-cursor-dot";
  ring.className = "custom-cursor-ring";

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  document.body.classList.add("custom-cursor-enabled");

  function getSavedCursorPosition() {
    try {
      const saved = JSON.parse(sessionStorage.getItem("olkCursorPosition") || "null");

      if (
        saved &&
        typeof saved.x === "number" &&
        typeof saved.y === "number"
      ) {
        return saved;
      }

      return null;
    } catch {
      return null;
    }
  }

  const savedPosition = getSavedCursorPosition();

  let mouseX = savedPosition ? savedPosition.x : window.innerWidth / 2;
  let mouseY = savedPosition ? savedPosition.y : window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  function saveCursorPosition(x, y) {
    sessionStorage.setItem(
      "olkCursorPosition",
      JSON.stringify({
        x,
        y
      })
    );
  }

  function placeCursorImmediately() {
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
  }

  function showCursor() {
    document.body.classList.remove("cursor-is-hidden");
  }

  function hideCursor() {
    document.body.classList.add("cursor-is-hidden");
  }

  if (savedPosition) {
    placeCursorImmediately();
    showCursor();
  } else {
    hideCursor();
  }

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);
  }

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    saveCursorPosition(mouseX, mouseY);
    showCursor();
  });

  window.addEventListener("mousedown", () => {
    document.body.classList.add("cursor-is-clicking");
  });

  window.addEventListener("mouseup", () => {
    document.body.classList.remove("cursor-is-clicking");
  });

  document.addEventListener("mouseover", (event) => {
    const interactiveElement = event.target.closest(
      "a, button, .btn, .project-card, .proj__visual, .proj__link, .contact-card, .products-image, .about-hover-image, .value-card"
    );

    const formElement = event.target.closest(
      "input, textarea, select, label"
    );

    if (interactiveElement) {
      document.body.classList.add("cursor-is-hovering");
    }

    if (formElement) {
      hideCursor();
    }
  });

  document.addEventListener("mouseout", (event) => {
    const interactiveElement = event.target.closest(
      "a, button, .btn, .project-card, .proj__visual, .proj__link, .contact-card, .products-image, .about-hover-image, .value-card"
    );

    const formElement = event.target.closest(
      "input, textarea, select, label"
    );

    if (interactiveElement) {
      document.body.classList.remove("cursor-is-hovering");
    }

    if (formElement) {
      showCursor();
    }
  });

  document.addEventListener("mouseleave", () => {
    hideCursor();
  });

  document.addEventListener("mouseenter", () => {
    showCursor();
  });

  window.addEventListener("olkTransitionComplete", () => {
    showCursor();
  });

  placeCursorImmediately();
  animateCursor();
})();