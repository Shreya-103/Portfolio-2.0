import Carousel from "react-bootstrap/Carousel";
import styles from "./projects.module.css";

const Projects = () => {
    return (
        <section className={styles.projectSection}>
            <h1 className={styles.heading}>Projects</h1>

            <Carousel fade interval={3000}>

                {/* Project 1*/}
                <Carousel.Item>
                    <img
                        className={styles.carouselImage}
                        src="./Screenshot (30).png"
                        alt="Landing page - bootstrap"
                    />

                    <Carousel.Caption>
                        <h3>Landing page using bootstrap</h3>
                        <p>
                            Responsive landing page made using bootstrap components.
                        </p>

                        <button className="btn btn-dark">
                            <a href="https://shreya-103.github.io/Web-Using-Bootstrap" className={styles.link}>View</a>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Project 2*/}
                <Carousel.Item>
                    <img
                        className={styles.carouselImage}
                        src="./Screenshot (93).png"
                        alt="Currency Converter"
                    />

                    <Carousel.Caption>
                        <h3>Currency Converter</h3>
                        <p>
                            Real-time currency conversion using exchange rate API.
                        </p>
                        <button className="btn btn-dark" >
                            <a href="https://shreya-103.github.io/currency-converter" className={styles.link}>View</a>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Project 3 */}
                <Carousel.Item>
                    <img
                        className={styles.carouselImage}
                        src="./Screenshot (98).png"
                        alt="Notes App"
                    />

                    <Carousel.Caption>
                        <h3>Notes App</h3>
                        <p>
                            Dynamic image fetching and responsive gallery using React.
                        </p>
                        <button className="btn btn-dark">
                            <a href="https://shreya-103.github.io/Notes-App" className={styles.link}>View</a>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>


                {/* Project last */}
                <Carousel.Item>
                    <img
                        className={styles.carouselImage}
                        src="./Screenshot (81).png"
                        alt="First project"
                    />

                    <Carousel.Caption>
                        <h3>Employee Entry System</h3>
                        <p>
                            Secure employee login and management system developed during internship at BEL.
                        </p>

                        <button className="btn btn-dark">
                            <a href="https://shreya-103.github.io/employee-entry-login" className={styles.link}
                        >View</a> </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Projects;

//  <div class="card">
//         <img src="./images/Screenshot (30).png" alt="Packers and Movers">
//         <div class="card-body">
//           <h5 class="card-title">Packers & Movers Static</h5>

//           <p class="project-detail">
//             Modern and responsive Packers & Movers landing page built using Bootstrap.
//           </p>

//           <p class="project-detail">
//             Features a clean dark-themed UI, mobile-friendly layout, smooth section spacing, and optimized design for
//             all screen sizes.
//           </p>

//           <a href="https://shreya-103.github.io/Web-Using-Bootstrap" class="btn btn-secondary">View</a>
//         </div>
//       </div>


//       <!-- Card 3 -->
//       <div class="card">
//         <img src="./images/Screenshot (96).png" alt="Bond Calculator">

//         <div class="card-body">
//           <h5 class="card-title">Calculate Bond</h5>

//           <p class="project-detail">
//             Interactive JavaScript project that calculates a fun bond percentage between two names.
//           </p>

//           <p class="project-detail">
//             Uses random number generation in JavaScript to create dynamic results with a playful and engaging user
//             experience.
//           </p>

//           <a href="https://shreya-103.github.io/Calculate-Bond/" class="btn btn-secondary">View</a>
//         </div>
//       </div>

//       <!-- Card 4 -->
//       <div class="card">
//         <img src="./images/Screenshot (68).png" alt="Tic Tac Toe">

//         <div class="card-body">
//           <h5 class="card-title">Tic Tac Toe</h5>

//           <p class="project-detail">
//             Classic two-player Tic Tac Toe game developed using JavaScript.
//           </p>

//           <p class="project-detail">
//             Includes responsive design, interactive gameplay, turn-based logic, and a clean modern user interface for
//             smooth user experience.
//           </p>

//           <a href="https://shreya-103.github.io/tic-tac-toe/" class="btn btn-secondary" style="margin-top:1.5rem;">View</a>
//         </div>
//       </div>

//       <!-- Card 6 -->
//       <div class="card">
//   <img src="./images/Screenshot (81).png" alt="employee-entry-system">

//   <div class="card-body">
//     <h5 class="card-title">Employee Entry System</h5>

//     <p class="project-detail" style="font-size: 13px;">
//       A role-based employee entry management system developed during my internship at BEL.
//       Features separate employee and admin login authentication with a responsive UI.
//     </p>

//     <p class="project-detail" style="font-size: 13px;">
//       Built using HTML, CSS, JavaScript.
//     </p>

//     <p class="project-detail">
//       Employee ID: UPT223 | Password: 12345
//     </p>

//     <p class="project-detail">
//       Admin: admin | Password: 1234
//     </p>

//     <a href="https://shreya-103.github.io/employee-entry-login"
//        class="btn btn-secondary">
//        View
//     </a>
//   </div>
// </div>

//       <!-- card 7-->
//       <div class="card">
//         <img src="./images/Screenshot (93).png" alt="Currency-Converter">
//         <div class="card-body">
//           <h5 class="card-title">Currency Converter</h5>
//           <p class="project-detail">
//             A responsive Currency Converter web app built using HTML, CSS, and JavaScript that converts currencies using
//             real-time exchange rates.
//           </p>

//           <p class="project-detail">
//             Features include dynamic country flags, currency swapping, live conversion updates, API integration, and a
//             clean mobile-friendly user interface.
//           </p>
//           <a href="https://shreya-103.github.io/currency-converter/" class="btn btn-secondary">View</a>
//         </div>
//       </div>

//       <!-- Card 8 -->
//       <div class="card">
//         <img src="./images/Screenshot (98).png" alt="Notes App">

//         <div class="card-body">
//           <h5 class="card-title">Notes App</h5>

//           <p class="project-detail">
//             A responsive Notes App built using React that allows users to create, search, and manage notes efficiently
//             with a clean and interactive UI.
//           </p>

//           <p class="project-detail">
//             Integrated localStorage for persistent data saving, dark mode support, real-time updates, and responsive
//             design for seamless usage across devices.
//           </p>

//           <a href="https://shreya-103.github.io/Notes-App/" class="btn btn-secondary">
//             View
//           </a>
//         </div>
//       </div>