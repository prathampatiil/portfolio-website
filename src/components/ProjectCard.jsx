function ProjectCard({ project }) {
  const gradient = project.gradient || "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.5))";
  return (
    <article className="project-card" style={{ background: gradient }}>
      <p className="eyebrow">{project.type}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-impact-wrapper">
        <span className="project-impact">{project.impact}</span>
      </div>
      <div className="tech-list">
        {project.stack.map((tech) => (
          <span key={tech} className="skill-pill">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-footer">
        <span className="timeline">{project.timeline}</span>
        <a href={project.link} className="btn ghost" target="_blank" rel="noreferrer">
          View case study
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
