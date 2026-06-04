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
    threshold: 0.5,
    triggerOnce: false,
  });

  const getResponsivePosition = (index) => {
    const width =
      typeof window !== "undefined"
        ? window.innerWidth
        : 1200;

    // MOBILE
    if (width < 768) {
      return {
        x: (index % 2) * 170 + 50,
        y: Math.floor(index / 2) * 130 + 40,
      };
    }

    // TABLET
    if (width < 1024) {
      return {
        x: (index % 3) * 170 + 50,
        y: Math.floor(index / 3) * 130 + 40,
      };
    }

    // DESKTOP
    return {
      x: (index % 3) * 230 + 80,
      y: Math.floor(index / 3) * 150 + 60,
    };
  };

  return (
    <section className={styles.sectionII} ref={ref} id="skills">
      <div className={styles.wrapper}>
        {/* Desktop Heading */}
        <div className={styles.sideTag}>
          <h1>SKILLS</h1>
        </div>

        {/* Mobile Heading */}
        <h1 className={styles.mobileHeading}>
          SKILLS
        </h1>

        {/* Skills Grid */}
        <div className={styles.container}>
          {skills.map((skill, index) => {
            const position =
              getResponsivePosition(index);

            return (
              <motion.div
                key={skill.name}
                className={styles.card}
                whileHover={{
                  y: -10,
                  scale: 1.12,
                }}
                animate={
                  inView
                    ? {
                      x: position.x,
                      y: position.y,
                      rotate: 0,
                      scale: 1,
                      opacity: 1,
                    }
                    : {
                      x: 0,
                      y: 0,
                      rotate: index * 5,
                      scale: 0.8,
                      opacity: 0,
                    }
                }
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: index * 0.05,
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                />

                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;