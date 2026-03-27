import GitHubProjects from "./GitHubProjects";

// Add the exact names of your GitHub data science repositories here!
// They must perfectly match the URL name of the repository exactly.
const MY_DATA_SCIENCE_PROJECTS = [
  "portfolio-website", // <-- I left this here so the page isn't totally blank. You can delete it later!
  // "titanic-survival-prediction",
  // "sales-data-dashboard"
];

function ProjectsPage() {
  return (
    <section className="page projects-page">
      <div className="section-heading">
        <p className="eyebrow">Interactive Hub</p>
        <h2>Hand-Picked Case Studies</h2>
        <p>
          Specific data engineering pipelines, predictive models, and exploratory analyses.
        </p>
      </div>

      <GitHubProjects username="prathampatiil" specificRepos={MY_DATA_SCIENCE_PROJECTS} /> 
    </section>
  );
}

export default ProjectsPage;
