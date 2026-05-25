import styles from "./techskills.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js"/>,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/>
];

const TechSkills = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sideTag}>
        <h1>SKILLS</h1>
      </div>

      {/* TOP HEADING FOR MOBILE */}
      <h1 className={styles.mobileHeading}>SKILLS</h1>

      <div className={styles.container}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            animate={
              inView
                ? {
                    x: (index % 3) * 220 - 220,
                    y: Math.floor(index / 3) * 140,
                    rotate: 0,
                    scale: 1,
                  }
                : {
                    x: 0,
                    y: 0,
                    rotate: index * 3,
                    scale: 0.95,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: index * 0.05,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;