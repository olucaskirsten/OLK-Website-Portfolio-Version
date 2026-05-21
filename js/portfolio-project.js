const projectHeroBg = document.querySelector(".project-hero__bg");

if (projectHeroBg) {
    window.addEventListener("scroll", () => {
        projectHeroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    }, { passive: true });
}

const projectRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            projectRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    ".project-intro__image, .project-intro__content, .project-showcase img, .project-details__content, .project-details__image, .project-gallery__grid img, .project-result__inner"
).forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(28px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    projectRevealObserver.observe(element);
});