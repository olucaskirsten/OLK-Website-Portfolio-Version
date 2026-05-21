if (document.getElementById("servicesParticles")) {
  tsParticles.load("servicesParticles", {
    background: {
      color: "transparent"
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 45,
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
        opacity: 0.08,
        distance: 145
      },
      move: {
        enable: true,
        speed: 0.7,
        outModes: {
          default: "bounce"
        }
      },
      opacity: {
        value: 0.38
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
            opacity: 0.18
          }
        }
      }
    },
    detectRetina: true
  });
}