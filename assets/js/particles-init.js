tsParticles.load("tsparticles", {
  background: {
    color: { value: "#transparent" } // fully transparent background
  },
  fpsLimit: 60, // limits frames per second
  particles: {
    color: { value: ["#4A90E2", "#7F8C8D"] }, // blue and gray
    links: { enable: false }, // no connecting lines
    move: {
      enable: true,
      speed: 1.5, // particle movement speed
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" } // particles that leave canvas reappear
    },
    number: {
      value: 60, // total number of particles
      density: { enable: true, area: 800 } // spread across canvas
    },
    opacity: { value: 0.6 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } } // particle size in px
  },
  detectRetina: true // sharper on high DPI screens
});
