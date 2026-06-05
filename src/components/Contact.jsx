import "../styles/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <h2>Contact Me</h2>

      <div className="contact-card">

        <p>
          📧 Email:
          <a href="mailto:srujanvinnu02@gmail.com">
            srujanvinnu02@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/srujankumar02"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/Srujankumar022004"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </p>

      </div>

    </motion.section>
  );
}

export default Contact;