import { useState } from 'react';

export default function NotebookResumeButton() {
  const [stage, setStage] = useState(0); 

  const handleDownload = () => {
    if (stage !== 0) return;
    setStage(1);
    setTimeout(() => setStage(2), 800);
    setTimeout(() => setStage(3), 1600);
    setTimeout(() => {
      setStage(4);
      // Let it stay on success for a bit, then reset
      setTimeout(() => setStage(0), 4000);
    }, 2400);
  };

  const getLabel = () => {
    switch(stage) {
      case 0: return '[ ] Download Resume.ipynb';
      case 1: return '[*] Loading modules...';
      case 2: return '[*] Training data...';
      case 3: return '[*] Compiling PDF...';
      case 4: return '[1] Success! (Res_v1.pdf)';
      default: return '[ ] Download Resume.ipynb';
    }
  };

  return (
    <button className={`btn primary notebook-btn stage-${stage}`} onClick={handleDownload} style={{ fontFamily: 'monospace', letterSpacing: '0' }}>
      {getLabel()}
    </button>
  );
}
