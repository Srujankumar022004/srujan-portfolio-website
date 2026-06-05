import "../styles/GithubStats.css";

function GithubStats() {
  return (
    <section
      id="github"
      className="github-section"
    >

      <h2>GitHub Activity Dashboard</h2>

      <div className="github-grid">

        <div className="github-card">

          <img
            src="https://github-readme-stats.vercel.app/api?username=Srujankumar022004&show_icons=true&theme=dark"
            alt="GitHub Stats"
          />

        </div>

        <div className="github-card">

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Srujankumar022004&theme=dark"
            alt="GitHub Streak"
          />

        </div>

        <div className="github-card full-width">

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Srujankumar022004&layout=compact&theme=dark"
            alt="Top Languages"
          />

        </div>

      </div>

    </section>
  );
}

export default GithubStats;