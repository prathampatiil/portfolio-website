import Icons from "./Icons";
import Terminal from "./Terminal";

function AboutPage({ highlights, skills }) {
  return (
    <section className="page about-page">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>Aspiring Data Professional | Python SQL & Machine Learning</h2>
        <div className="about-intro-wrapper">
          {/* Replace profile.jpg with your exact photo filename inside the public folder */}
          <img src="/profile.png" alt="Pratham Patil" className="profile-img-small" />
          <p>
            I am passionate about turning raw data into clear, actionable insights by building structured pipelines,
            conducting exploratory analysis, and training foundational machine learning models.
          </p>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-summary">
          <p>
            I am deeply enthusiastic about leveraging data to solve real-world problems. I focus on building a strong foundation in machine learning algorithms, writing clean Python code, and maintaining thorough documentation.
          </p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Terminal />

        </div>
        <div className="focus-grid about-grid">
          {skills.map((skill) => {
            const Icon = Icons[skill.name.replace(/\s/g, "")] || (() => <span>{skill.name.charAt(0)}</span>);
            return (
              <div key={skill.name} className="skill-card">
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
    </section>
  );
}

export default AboutPage;
