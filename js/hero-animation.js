const heroAnimation = document.querySelector(".hero-bg-animation");
const orb1 = document.querySelector(".hero-orb-1");
const orb2 = document.querySelector(".hero-orb-2");
const orb3 = document.querySelector(".hero-orb-3");

if (heroAnimation && orb1 && orb2 && orb3) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  function animateHero() {
    currentX += (mouseX - currentX) * 0.04;
    currentY += (mouseY - currentY) * 0.04;

    orb1.style.transform = `translate(${currentX * 40}px, ${currentY * 30}px)`;
    orb2.style.transform = `translate(${currentX * -55}px, ${currentY * 45}px)`;
    orb3.style.transform = `translate(${currentX * 35}px, ${currentY * -40}px)`;

    requestAnimationFrame(animateHero);
  }

  animateHero();
}