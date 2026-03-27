import Icons from "./Icons";
import MLPlayground from "./MLPlayground";
import NotebookResumeButton from "./NotebookResumeButton";

function HomePage({ skills, contact }) {
  return (
    <div className="home-page page">
      <div className="hero-content-wrapper">
        <div className="home-content">
          <p className="eyebrow">Aspiring Data Scientist</p>
          <h1>Pratham Patil</h1>
          <p className="lede">
            Freshman CSE student with a growing passion for machine learning, data engineering algorithms, 
            and building transparent model pipelines from the ground up.
          </p>
          <div className="hero-actions">
            <NotebookResumeButton />
            <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-image">
          {/* Replace profile.jpg with your actual photo file in the public folder */}
          <img src="/profile.png" alt="Pratham Patil" className="profile-img" />
        </div>
      </div>

      <MLPlayground />

      <div className="section-heading" style={{ marginTop: "4rem", marginBottom: "2rem" }}>
        <h2>Core Focus</h2>
      </div>
      <div className="focus-grid">
        {skills.map((skill) => {
          const Icon = Icons[skill.name.replace(/\s/g, "")] || (() => <span>{skill.name.charAt(0)}</span>);
          return (
            <div key={skill.name} className="skill-card glass-panel" style={{ height: '100%' }}>
              <div className="skill-icon">
                <Icon />
              </div>
              <div className="skill-info">
                <strong>{skill.name}</strong>
                <p>{skill.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
