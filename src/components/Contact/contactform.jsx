import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "./contactform.module.css";

const ContactSection = () => {
  const cardRef = useRef(null);
  const formRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 15;
    const rotateX = ((y / rect.height) - 0.5) * -15;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0)";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1ldzqo",
        "template_hynq3p6",
        formRef.current,
        "2qSglBA4bNDuZJUfs"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.", error);
      });
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Floating Background */}
      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={styles.container}>
        {/* LEFT SIDE */}

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.orbit}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className={styles.circle}></div>
          </motion.div>

          <motion.div
            className={styles.shape1}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <motion.div
            className={styles.shape2}
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

          <span className={styles.badge}>
            🟢 Available for Opportunities
          </span>

          <h2>
            Let's Create
            <br />
            Something Amazing
          </h2>

          <p>
            Have an idea, project, or collaboration in mind?
            I'm always excited to build modern and engaging web experiences.
          </p>

          <div className={styles.infoCards}>
            <a href="mailto:shreyaalpha1@gmail.com" className={styles.alink}>
              <div className={styles.infoCard}>
                📧 Mail to Shreya
              </div>
            </a>
            <a href="https://www.linkedin.com/in/shreya-jha-39235a374" className={styles.alink}>
              <div className={styles.infoCard}>
                💼 LinkedIn Profile
              </div>
            </a>

            <a href="https://github.com/Shreya-103" className={styles.alink}>
              <div className={styles.infoCard}>
                🐱‍👤 Check my GitHub Profile here
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            ref={cardRef}
            className={styles.formCard}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
          >
            <h3>Send a Message</h3>

            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
              />

              <button type="submit">
                Send Message →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;