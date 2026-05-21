document.addEventListener("DOMContentLoaded", () => {
  const particlesContainer = document.getElementById("contactParticles");

  if (!particlesContainer || typeof tsParticles === "undefined") return;

  tsParticles.load("contactParticles", {
    background: {
      color: "transparent"
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 35,
        density: {
          enable: true,
          area: 900
        }
      },
      color: {
        value: ["#00d4ff", "#7c3cff", "#ff2bd6"]
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.045,
        distance: 145
      },
      move: {
        enable: true,
        speed: 0.45,
        outModes: {
          default: "bounce"
        }
      },
      opacity: {
        value: 0.24
      },
      size: {
        value: {
          min: 1,
          max: 2.5
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
          distance: 150,
          links: {
            opacity: 0.1
          }
        }
      }
    },
    detectRetina: true
  });
});