import styles from "./aboutme.module.css";
import { motion } from "framer-motion";

const sections = [
  {
    title: "About Me",
    content:
      "I'm a passionate Web Developer and BCA student who enjoys building modern, interactive, and responsive web experiences. I love transforming ideas into beautiful user interfaces and continuously improving my development skills."
  },
  {
    title: "Technical Skills",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Git"
    ]
  },   
  {
    title: "Qualifications",
    content:
      "Currently pursuing BCA while actively learning Full Stack Development. Strong foundation in frontend technologies with a growing understanding of backend development and modern web architecture."
  },
  {
    title: "Currently Looking For",
    content:
      "Frontend Development internships, freelance opportunities, collaborative projects, and chances to work on real-world applications that challenge and expand my skillset."
  }
];

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -120,
    filter: "blur(10px)"
  },
  hiddenRight: {
    opacity: 0,
    x: 120,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const AboutMe = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className={styles.timeline}>
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            variants={cardVariants}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.02
            }}
          >
            <h3>{item.title}</h3>

            {item.skills ? (
              <div className={styles.skillsContainer}>
                {item.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={styles.skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.08
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            ) : (
              <p>{item.content}</p>
            )}
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default AboutMe;