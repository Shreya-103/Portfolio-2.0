import Carousel from "react-bootstrap/Carousel";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projectSection}>
      <h1 className={styles.heading}>Projects</h1>

      <Carousel fade interval={3000}>
        
        {/* Project 1 */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="./Screenshot (30).png"
            alt="First project"
          />

          <Carousel.Caption>
            <h3>Employee Entry System</h3>
            <p>
              Secure employee login and management system developed during internship.
            </p>
            
            <button className="btn btn-light"><a href="https://shreya-103.github.io/employee-entry-login" className="styles.link"></a> View </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 2 */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="./Screenshot (69).png"
            alt="Second project"
          />

          <Carousel.Caption>
            <h3>Currency Converter</h3>
            <p>
              Real-time currency conversion using exchange rate API.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 3 */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="./Screenshot (81).png"
            alt="Third project"
          />

          <Carousel.Caption>
            <h3>Image Gallery App</h3>
            <p>
              Dynamic image fetching and responsive gallery using React.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

{/* Project 4 */}
<Carousel.Item>
          <img
            className={styles.carouselImage}
            src="./Screenshot (69).png"
            alt="Second project"
          />

          <Carousel.Caption>
            <h3>Currency Converter</h3>
            <p>
              Real-time currency conversion using exchange rate API.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Projects;