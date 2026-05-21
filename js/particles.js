tsParticles.load("tsparticles", {
  background: {
    color: "transparent"
  },

  fpsLimit: 60,

  particles: {
    number: {
      value: 55
    },

    color: {
      value: [
        "#7c3cff",
        "#00d4ff",
        "#ff2bd6"
      ]
    },

    links: {
      enable: true,
      color: "#ffffff",
      opacity: 0.08,
      distance: 140
    },

    move: {
      enable: true,
      speed: 1,
      outModes: {
        default: "bounce"
      }
    },

    opacity: {
      value: 0.45
    },

    size: {
      value: {
        min: 1,
        max: 4
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
        distance: 180,
        links: {
          opacity: 0.22
        }
      }
    }
  },

  detectRetina: true
});