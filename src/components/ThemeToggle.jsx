import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isLight]);

  return (
    <div className="theme-toggle-wrapper" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <button 
        className="btn ghost" 
        onClick={() => setIsLight(!isLight)}
        style={{ padding: '0.5rem', fontSize: '1.2rem', borderRadius: '50%', display: 'grid', placeItems: 'center', width: '40px', height: '40px' }}
        aria-label="Toggle Theme"
      >
        {isLight ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
