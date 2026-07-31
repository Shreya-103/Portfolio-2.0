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
            I recently completed my Bachelor's of Computer Applications (B.C.A.) and enjoy building 
            practical web applications. I believe in learning through projects and continuously 
            improving my development skills as I begin my professionalcareer.
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
          <h3>Industry Exposure</h3>

          <p>
            Completed my internship at BHARAT ELECTRONICS LIMITED (BEL), where I gained 
            exposure to professional work culture, project execution and made an employee 
            entry web system to simulate the same.
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
          <h3>Project Experience</h3>
          <p>
            Built multiple projects to strengthen my understanding of full stack development.
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
          <h3>Open to Opportunities</h3>

          <p>
            Having completed my BCA, I am actively looking for opportunities 
            to start my career in software development. I am excited to contribute,
            learn from experienced teams, and build impactful applications. 
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