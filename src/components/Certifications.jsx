import "../styles/Certifications.css";

const certifications = [

  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
    category: "Cybersecurity",
    status: "Verified",
    type: "badge",
    image: "/badge/CyberEssentials.png",
    link: "https://www.credly.com/badges/7d25a3ae-d763-4968-bd68-f3b5ee58f843/linked_in_profile"
  },

  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    year: "2025",
    category: "Artificial Intelligence",
    status: "Verified",
    type: "badge",
    image: "/badge/GoogleGenAI.png",
    link: "https://www.skills.google/public_profiles/6d5534d6-5e71-4c6c-86d4-22a8cc788b48/badges/16217413?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },

  {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    category: "Cybersecurity",
    status: "Verified",
    type: "certificate",
    link: "/certificates/career-essentials-cybersecurity.pdf"
  },

  {
    title: "Cisco AICTE Virtual Cybersecurity Internship",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Cybersecurity Internship",
    status: "Completed",
    type: "certificate",
    link: "/certificates/cisco-aicte-cybersecurity.pdf"
  },

  {
    title: "Deloitte Australia Cyber Job Simulation",
    issuer: "Forage",
    year: "2025",
    category: "Cybersecurity",
    status: "Completed",
    type: "certificate",
    link: "/certificates/deloitte-cyber.pdf"
  },

  {
    title: "Microsoft Copilot for Security",
    issuer: "Microsoft",
    year: "2024",
    category: "Security AI",
    status: "Verified",
    type: "certificate",
    link: "/certificates/microsoft-copilot-security.pdf"
  },

  {
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "Cybersecurity",
    status: "Verified",
    type: "certificate",
    link: "/certificates/cybersecurity-foundations.pdf"
  },

  {
    title: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "Threat Intelligence",
    status: "Verified",
    type: "certificate",
    link: "/certificates/cyber-threat-landscape.pdf"
  },

  {
    title: "Cybersecurity Awareness: Cybersecurity Terminology",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "Security Awareness",
    status: "Verified",
    type: "certificate",
    link: "/certificates/cybersecurity-terminology.pdf"
  },

  {
    title: "Practice Exam for Cisco Certified Network Associate (CCNA)",
    issuer: "LinkedIn Learning",
    year: "2024",
    category: "Networking",
    status: "Completed",
    type: "certificate",
    link: "/certificates/ccna-practice-exam.pdf"
  },

  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    category: "Data Analytics",
    status: "Completed",
    type: "certificate",
    link: "/certificates/TATA-GenAI.pdf"
  },

  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS",
    year: "2025",
    category: "Professional Development",
    status: "Verified",
    type: "certificate",
    link: "/certificates/TATA-young.pdf"
  },

  {
    title: "Industrial Internet of Things (IIoT) Internship",
    issuer: "NIT Warangal & Siemens",
    year: "2024",
    category: "Industrial IoT",
    status: "Completed",
    type: "certificate",
    link: "/certificates/iiot-internship.pdf"
  }

];

function Certifications() {

  return (

    <section
      id="certifications"
      className="certifications-section"
    >

      <h2>Verified Credentials</h2>

      <div className="certifications-grid">

        {certifications.map((cert, index) => (

          <div
            className="cert-card"
            key={index}
          >

            {cert.image && (

              <img
                src={cert.image}
                alt={cert.title}
                className="badge-image"
              />

            )}

            <h3>{cert.title}</h3>

            <span className="issuer-tag">
              {cert.issuer}
            </span>

            <p>
              <strong>Year:</strong> {cert.year}
            </p>

            <p>
              <strong>Category:</strong> {cert.category}
            </p>

            <p className="status">
              STATUS: {cert.status}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-btn"
            >

              {cert.type === "badge"
                ? "🏅 View Badge"
                : "📜 View Certificate"}

            </a>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Certifications;