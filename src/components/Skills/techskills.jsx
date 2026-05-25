import styles from "./techskills.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const TechSkills = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const getResponsivePosition = (index) => {
    const width = window.innerWidth;

    // MOBILE
    if (window.innerWidth < 768) {
      return {
        x: (index % 2) * 140 - 70,
        y: Math.floor(index / 2) * 120,
      };
    }

    // TABLET
    if (width < 1024) {
      return {
        x: (index % 3) * 180 - 180,
        y: Math.floor(index / 3) * 130,
      };
    }

    // DESKTOP
    return {
      x: (index % 3) * 220 - 220,
      y: Math.floor(index / 3) * 150,
    };
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sideTag}>
        <h1>SKILLS</h1>
      </div>

      <h1 className={styles.mobileHeading}>SKILLS</h1>

      <div className={styles.container}>
        {skills.map((skill, index) => {
          const position = getResponsivePosition(index);

          return (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{
                y: -10,
                scale: 1.15,
              }}
              animate={
                inView
                  ? {
                      x: position.x,
                      y: position.y,
                      rotate: 0,
                      scale: 1,
                    }
                  : {
                      x: 0,
                      y: 0,
                      rotate: index * 4,
                      scale: 0.9,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: index * 0.05,
              }}
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechSkills;