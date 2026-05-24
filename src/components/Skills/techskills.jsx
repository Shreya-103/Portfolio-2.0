import styles from "./techskills.module.css";


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "Git",
];

const TechSkills = () => {
  return (
 <section className={styles.skillsSection}>
      <div className={styles.sideTag}>
        <span>SKILLS</span>
      </div>

      <h1 className={styles.mobileHeading}>Skills</h1>

      <div className={styles.cardWrapper}>
        {skills.map((skill, index) => (
          <div
            className={styles.card}
            key={index}
            style={{ "--i": index }}
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechSkills;