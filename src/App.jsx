import { useState } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import BackgroundStream from "./components/BackgroundStream";
import ThemeToggle from "./components/ThemeToggle";
import SpotlightCursor from "./components/SpotlightCursor";
import "./App.css";

const skills = [
  { name: "Python", detail: "NumPy, Pandas, Scikit-learn" },
  { name: "SQL", detail: "PostgreSQL" },
  { name: "ETL", detail: "Airflow," },
  { name: "Visualization", detail: "Plotly, Streamlit" },
  { name: "Cloud", detail: "GCP,Cloud Storage" },
  { name: "ML Ops", detail: "MLflow, experiment tracking" }
];

const contact = {
  email: "pratham.patil1001@gmail.com",
  linkedin: "https://www.linkedin.com/in/pratham-patil-8b24243b5/"
};

const aboutHighlights = [
  "Freshman CSE student with a strong passion for data analytics",
  "Actively learning Python scripting, SQL, and machine learning fundamentals",
  "Constantly seeking to build foundational projects and solve data-driven problems"
];

const navLinks = [
  { label: "About me", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
  { label: "Home", page: "home" }
];

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div className="app-shell">
      <BackgroundStream />
      <SpotlightCursor />
      <nav className="app-nav">
        <div className="brand">Pratham Patil</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              className={`nav-link ${currentPage === link.page ? "active" : ""}`}
              onClick={() => setCurrentPage(link.page)}
            >
              {link.label}
            </button>
          ))}

          <div style={{ marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border-light)' }}>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="page-wrapper" key={currentPage}>
        {currentPage === "home" && (
          <HomePage skills={skills} contact={contact} />
        )}
        {currentPage === "about" && (
          <AboutPage highlights={aboutHighlights} skills={skills} />
        )}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "contact" && <ContactPage contact={contact} />}
      </div>
    </div>
  );
}

export default App;
