document.addEventListener("DOMContentLoaded", () => {
  const particlesContainer = document.getElementById("aboutParticles");

  if (!particlesContainer || typeof tsParticles === "undefined") return;

  tsParticles.load("aboutParticles", {
    background: {
      color: "transparent"
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 55,
        density: {
          enable: true,
          area: 900
        }
      },
      color: {
        value: ["#7c3cff", "#00d4ff", "#ff2bd6"]
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.07,
        distance: 145
      },
      move: {
        enable: true,
        speed: 0.65,
        outModes: {
          default: "bounce"
        }
      },
      opacity: {
        value: 0.32
      },
      size: {
        value: {
          min: 1,
          max: 3
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 170,
          links: {
            opacity: 0.16
          }
        }
      }
    },
    detectRetina: true
  });
});