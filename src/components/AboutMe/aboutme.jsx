import styles from "./aboutme.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(10px)"
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
       duration: 0.7, delay: i * 0.15
    }
  })
};

const AboutMe = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Building modern web experiences with creativity,
        curiosity, and continuous learning.
      </motion.p>

      <div className={styles.grid}>
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`${styles.card} ${styles.largeCard}`}
        >
          <h3>Who I Am</h3>

          <p>
            I'm a BCA student and web developer who enjoys creating
            modern, responsive, and interactive web applications.
            I love combining clean design with practical
            functionality to build experiences that feel intuitive,
            engaging, and meaningful.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className={styles.card}
        >
          <h3>Developer First</h3>

          <p>
            I enjoy transforming ideas into real products and
            solving problems through thoughtful development and
            hands-on project building.
          </p>
        </motion.div>

        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className={styles.card}
        >
          <h3>Design Focused</h3>

          <p>
            I pay attention to user experience, visual hierarchy,
            responsiveness, and smooth interactions that make
            applications enjoyable to use.
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className={styles.card}
        >
          <h3>Growth Mindset</h3>

          <p>
            I enjoy learning new technologies, collaborating with
            others, and continuously improving both technical and
            professional skills.
          </p>
        </motion.div>

        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`${styles.card} ${styles.statsCard}`}
        >
          <div className={styles.stat}>
            <h4>5+</h4>
            <span>Projects Built</span>
          </div>

          <div className={styles.stat}>
            <h4>2+</h4>
            <span>Years Learning</span>
          </div>

          <div className={styles.stat}>
            <h4>∞</h4>
            <span>Curiosity</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;