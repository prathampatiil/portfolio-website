import GitHubProjects from "./GitHubProjects";

function ProjectsPage() {
  return (
    <section className="page projects-page">
      <div className="section-heading">
        <p className="eyebrow">Interactive Hub</p>
        <h2>Live GitHub Repositories</h2>
        <p>
          Real-time feed of my latest models, data engineering pipelines, and open-source contributions.
        </p>
      </div>

      <GitHubProjects username="prathampatil" /> 
    </section>
  );
}

export default ProjectsPage;
