import "../styles/Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Education</h2>

      <div className="education-card">

        <h3>Bachelor of Technology (B.Tech)</h3>

        <h4>Computer Science and Engineering</h4>

        <p>
          Kakatiya Institute of Technology and Science (KITS),
          Warangal
        </p>

        <span>Graduated: 2025</span>

      </div>
    </motion.section>
  );
}

export default Education;