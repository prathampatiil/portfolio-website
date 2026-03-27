import { useState, useRef, useEffect } from "react";

const COMMANDS = {
  help: 'Available commands: whoami, skills, experience, clear',
  whoami: 'Pratham Patil - Aspiring Data Scientist (Freshman CSE)',
  skills: 'Python, SQL, Intro to Machine Learning, Pandas',
  experience: 'Building foundational projects and learning data pipelines',
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Pratham-OS v1.0.0' },
    { type: 'output', text: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      const newHistory = [...history, { type: 'input', text: `datacamp@pratham:~$ ${input}` }];

      if (cmd && COMMANDS[cmd]) {
        newHistory.push({ type: 'output', text: COMMANDS[cmd] });
      } else if (cmd) {
        newHistory.push({ type: 'error', text: `bash: ${cmd}: command not found` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="terminal-container glass-panel">
      <div className="terminal-header">
        <div className="term-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="term-title">pratham-os — bash</div>
      </div>
      <div className="terminal-window" ref={containerRef}>
        {history.map((line, i) => (
          <div key={i} className={`term-line ${line.type}`}>{line.text}</div>
        ))}
        <div className="term-input-line">
          <span className="prompt">datacamp@pratham:~$</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleCommand}
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
