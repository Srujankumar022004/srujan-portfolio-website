import "../styles/Hero.css";
import profile from "../assets/profile.jpg";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-image">

          <img
            src={profile}
            alt="Srujan Kumar"
            className="profile-image"
          />

        </div>

        <div className="hero-text">

          <p className="hero-status">
            ● AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Lingabathini
            <span> Srujan Kumar</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Cybersecurity Analyst",
              2000,
              "Blockchain Developer",
              2000,
              "Software Engineer",
              2000,
              "AI/ML Practitioner",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">

            Passionate Computer Science Engineer specializing in
            Cybersecurity, Blockchain Technology, AI/ML,
            Networking, and Full Stack Development.

          </p>

          <div className="hero-buttons">

            <a
              href="https://github.com/Srujankumar022004"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/srujankumar02"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              <FaDownload />
              Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;