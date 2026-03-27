import { useState, useEffect } from 'react';

export default function GitHubProjects({ username = 'prathampatiil', specificRepos = [] }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If specific repositories are provided, fetch only those
    if (specificRepos && specificRepos.length > 0) {
      Promise.all(
        specificRepos.map(repoName =>
          fetch(`https://api.github.com/repos/${username}/${repoName}`)
            .then(res => {
              if (!res.ok) return null;
              return res.json();
            })
        )
      )
      .then(data => {
        // Filter out any repos that failed to load
        const validRepos = data.filter(r => r !== null);
        setRepos(validRepos);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
    } else {
      // Fallback: Fetch all public repos and sort by stars if no specific ones provided
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        .then(res => {
          if (!res.ok) throw new Error('API Rate limit or user not found');
          return res.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
            setRepos(sorted);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(true);
          setLoading(false);
        });
    }
  }, [username, specificRepos]);

  if (loading) return <div style={{ color: 'var(--accent)', textAlign: 'center', padding: '3rem', fontWeight: 'bold' }}>[*] Fetching specified models from GitHub...</div>;
  if (error || repos.length === 0) return <div style={{ color: 'var(--muted)', textAlign: 'center', padding: '3rem' }}>No projects available right now.</div>;

  return (
    <div className="project-grid" style={{ marginTop: '2.5rem' }}>
      {repos.map(repo => (
        <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="project-card glass-panel" style={{ height: '100%' }}>
            <div className="project-impact-wrapper">
              <span className="project-impact" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                {repo.stargazers_count} Stars
              </span>
            </div>
            <h3>{repo.name}</h3>
            <p className="project-summary">{repo.description || "Data science pipeline and exploratory analysis."}</p>
            <div className="project-footer">
              <span className="timeline">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
              {repo.language && <div className="tech-list"><span className="skill-pill">{repo.language}</span></div>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
