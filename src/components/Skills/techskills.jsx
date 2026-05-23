import { useState } from "react";
import styles from "./techskills.module.css";


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Node.js",
  "Git",
];

const TechSkills = () => {
  const [open, setOpen] = useState(false);
  return (
 <section className={styles.skillsSection}>
      <div className={styles.sideTag}>
        <span>SKILLS</span>
      </div>
      <h1 className={styles.mobileHeading}>Skills</h1>

      <div
  className={`${styles.cardWrapper} ${open ? styles.open : ""}`}
  onClick={() => setOpen(!open)}
>
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