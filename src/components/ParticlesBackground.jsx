import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: "#06b6d4",
          },

          links: {
            color: "#06b6d4",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;