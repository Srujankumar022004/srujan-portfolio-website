import "../styles/Skills.css";

function Skills() {

  const skills = [

    {
      title: "Programming Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "C++"
      ]
    },

    {
      title: "Cybersecurity & Networking",
      skills: [
        "Network Security",
        "DNS Analysis",
        "Threat Detection",
        "CCNA Concepts",
        "Wireshark"
      ]
    },

    {
      title: "Blockchain Technology",
      skills: [
        "Ethereum",
        "Smart Contracts",
        "IPFS",
        "Web3.js",
        "Ethers.js"
      ]
    },

    {
      title: "Artificial Intelligence & ML",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "CNN",
        "SVM",
        "Data Analytics"
      ]
    },

    {
      title: "Web Development",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "MongoDB"
      ]
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "VS Code",
        "MetaMask",
        "Postman"
      ]
    }

  ];

  return (
    <section
      id="skills"
      className="skills-section"
    >

      <h2>Technical Expertise</h2>

      <div className="skills-grid">

        {skills.map((category, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <h3>{category.title}</h3>

            <div className="skill-tags">

              {category.skills.map((skill, idx) => (

                <span
                  key={idx}
                  className="skill-tag"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;