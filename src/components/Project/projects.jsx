import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "./project";
import styles from "./projects.module.css";

export default function Projects() {
  const [active, setActive] = useState(0);

  const prevProject = () => {
    setActive((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setActive((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const getIndex = (index) => {
    const diff = index - active;

    if (diff === 0) return "center";
    if (diff === -1 || diff === projects.length - 1)
      return "left";

    if (diff === 1 || diff === -(projects.length - 1))
      return "right";

    return "hidden";
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>
        Featured Projects
      </h2>

      <div className={styles.carousel}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`${styles.card} ${styles[getIndex(index)]
              }`}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
            />
          </motion.div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={prevProject}>
          ←
        </button>

        <button onClick={nextProject}>
          →
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={projects[active].id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          className={styles.details}
        >
          <h3>{projects[active].title}</h3>

          <p>
            {projects[active].description}
          </p>

          <div className={styles.links}>
            <a
              href={projects[active].demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href={projects[active].github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}