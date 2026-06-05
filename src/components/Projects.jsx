import "../styles/Projects.css";

import {
  FaGithub,
  FaShieldAlt,
  FaLink,
  FaShoppingCart,
  FaHeartbeat,
  FaBrain,
  FaUser
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      icon: <FaShieldAlt />,
      title: "DNS Spoofing Detection System",
      category: "Cybersecurity",
      status: "Operational",

      tech:
        "Python • Scapy • Networking • Cybersecurity",

      description:
        "Detects spoofed DNS packets and malicious DNS activity within network traffic.",

      github:
        "https://github.com/Srujankumar022004/DNS-Spoofing-detection-system"
    },

    {
      icon: <FaLink />,
      title: "Blockchain e-KYC System",
      category: "Blockchain",
      status: "Deployed",

      tech:
        "Ethereum • Smart Contracts • IPFS • Web3.js",

      description:
        "Decentralized e-KYC platform using blockchain technology and smart contracts.",

      github:
        "https://github.com/Srujankumar022004/Optimizing-E-KYC-using-distributed-ledger-technology-and-smart-contracts"
    },

    {
      icon: <FaShoppingCart />,
      title: "Full Stack E-Commerce Platform",
      category: "Full Stack",
      status: "Active",

      tech:
        "React • Node.js • Express • MongoDB",

      description:
        "Modern e-commerce platform featuring authentication, product management and order processing.",

      github:
        "https://github.com/Srujankumar022004/Full-stack-E-commerce-platform"
    },

    {
      icon: <FaHeartbeat />,
      title: "Heart Disease Prediction Using SVM",
      category: "Machine Learning",
      status: "Operational",

      tech:
        "Python • Flask • SVM",

      description:
        "Machine learning model that predicts heart disease risk using Support Vector Machine algorithms.",

      github:
        "https://github.com/Srujankumar022004/Heart-disease-prediction-Using-SVM"
    },

    {
      icon: <FaBrain />,
      title: "Image Classification Using CNN",
      category: "Deep Learning",
      status: "Operational",

      tech:
        "TensorFlow • CNN • Python",

      description:
        "Deep learning model that performs image recognition and classification.",

      github:
        "https://github.com/Srujankumar022004/Image-Classification-Using-CNN"
    },

    {
      icon: <FaUser />,
      title: "Portfolio Website",
      category: "Frontend",
      status: "Active",

      tech:
        "React.js • CSS • JavaScript",

      description:
        "Professional portfolio website showcasing projects, certifications and achievements.",

      github:
        "https://github.com/Srujankumar022004/srujan-portfolio-website-"
    }

  ];

  return (
    <section id="projects" className="projects-section">

      <h2>Project Showcase</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <div className="project-header">

              <h3>{project.title}</h3>

              <span className="status-badge">
                {project.status}
              </span>

            </div>

            <p className="category">
              {project.category}
            </p>

            <p className="tech-stack">
              {project.tech}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub />
              View Repository
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;