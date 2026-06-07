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

    if (
      diff === -1 ||
      diff === projects.length - 1
    )
      return "left";

    if (
      diff === 1 ||
      diff === -(projects.length - 1)
    )
      return "right";

    return "hidden";
  };

  // GROUP PROJECTS IN PAIRS
  const groupedProjects = [];

  for (let i = 0; i < projects.length; i += 2) {
    groupedProjects.push(
      projects.slice(i, i + 2)
    );
  }

  return (
    <section
      className={styles.projectsSection}
      id="projects"
    >
      <h2 className={styles.heading}>
        Featured Projects
      </h2>

      {/* MOBILE LAYOUT */}
      <div className={styles.mobileProjects}>
        {groupedProjects.map(
          (group, slideIndex) => (
            <div
              key={slideIndex}
              className={styles.mobileSlide}
            >
              {group.map(
                (project, projectIndex) => (
                  <div
                    key={project.id}
                    className={`${styles.mobileProject}
                    ${
                      projectIndex % 2 === 0
                        ? styles.leftText
                        : styles.rightText
                    }`}
                  >
                    <div
                      className={
                        styles.projectContent
                      }
                    >
                      <h3>{project.title}</h3>

                      <p>
                        {project.description}
                      </p>

                      <div
                        className={
                          styles.mobileLinks
                        }
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          ↗ Live
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          ⌘ Code
                        </a>
                      </div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                )
              )}
            </div>
          )
        )}
      </div>

      {/* DESKTOP CAROUSEL */}
      <div className={styles.desktopCarousel}>
        <div className={styles.carousel}>
          {projects.map(
            (project, index) => (
              <motion.div
                key={project.id}
                className={`${styles.card} ${
                  styles[getIndex(index)]
                }`}
                transition={{
                  duration: 0.5,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
            )
          )}
        </div>

        <div className={styles.controls}>
          <button
            onClick={prevProject}
          >
            ←
          </button>

          <button
            onClick={nextProject}
          >
            →
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={
              projects[active].id
            }
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
            className={
              styles.details
            }
          >
            <h3>
              {
                projects[active]
                  .title
              }
            </h3>

            <p>
              {
                projects[active]
                  .description
              }
            </p>

            <div
              className={
                styles.links
              }
            >
              <a
                href={
                  projects[active]
                    .demo
                }
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href={
                  projects[active]
                    .github
                }
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}