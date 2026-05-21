async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Could not load ${file}`);
    }

    const html = await response.text();

    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".site-nav a, .nav-mobile-overlay a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileOverlay = document.getElementById("navMobileOverlay");

  if (!menuToggle || !mobileOverlay) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileOverlay.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileOverlay.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileOverlay.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

async function initIncludes() {
  await Promise.all([
    loadComponent("header", "components/header.html"),
    loadComponent("footer", "components/footer.html"),
    loadComponent("whatsapp", "components/whatsapp.html")
  ]);

  setActiveNavLink();
  initMobileMenu();

  document.dispatchEvent(new Event("componentsLoaded"));
}

initIncludes();