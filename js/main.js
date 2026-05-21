/* ============================================================
   OLK WEB & SEO — SHARED JAVASCRIPT
   ============================================================ */

/* ---- PARALLAX HERO BACKGROUND ---- */
const parallaxLayers = document.querySelectorAll('.page-hero__parallax, .hero__parallax');

if (parallaxLayers.length) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    parallaxLayers.forEach(layer => {
      layer.style.transform = `translateY(${scrolled * 0.35}px)`;
    });
  }, { passive: true });
}

/* ---- SCROLL REVEAL ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.service-card, .project-card, .stat-block, .service-block, .proj, .product-feature, .contact-card, .about-stat-block'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`;
  revealObserver.observe(el);
});