import "../styles/Achievements.css";
import CountUp from "react-countup";

function Achievements() {

  const achievements = [

    {
      icon: "🏆",
      value: 13,
      suffix: "+",
      title: "Credentials Earned"
    },

    {
      icon: "💻",
      value: 6,
      suffix: "",
      title: "Major Projects"
    },

    {
      icon: "🛡",
      value: 91,
      suffix: "%",
      title: "Cybersecurity Focus"
    },

    {
      icon: "⛓",
      value: 60,
      suffix: "%",
      title: "Blockchain Solutions"
    },

    {
      icon: "🤖",
      value: 75,
      suffix: "%",
      title: "AI & Machine Learning"
    }

  ];

  return (

    <section
      id="achievements"
      className="achievements-section"
    >

      <h2>Achievements Dashboard</h2>

      <div className="achievements-grid">

        {achievements.map((item, index) => (

          <div
            className="achievement-card"
            key={index}
          >

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>

              <CountUp
                end={item.value}
                duration={3}
              />

              {item.suffix}

            </h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Achievements;