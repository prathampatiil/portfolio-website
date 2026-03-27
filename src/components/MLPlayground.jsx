import { useState, useEffect, useRef } from "react";

const INITIAL_W = 0;
const INITIAL_B = 0;

export default function MLPlayground() {
  const [points, setPoints] = useState([]);
  const [w, setW] = useState(INITIAL_W);
  const [b, setB] = useState(INITIAL_B);
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(0);
  
  const trainingRef = useRef(null);

  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * 100;
      const noise = (Math.random() - 0.5) * 35;
      const y = 0.65 * x + 15 + noise;
      newPoints.push({ x, y: Math.min(100, Math.max(0, y)) });
    }
    setPoints(newPoints);
    setLoss(calcLoss(newPoints, INITIAL_W, INITIAL_B));
  }, []);

  const calcLoss = (data, currentW, currentB) => {
    if (!data.length) return 0;
    const mse = data.reduce((acc, p) => {
      const pred = currentW * p.x + currentB;
      return acc + Math.pow(pred - p.y, 2);
    }, 0) / data.length;
    return Math.round(mse);
  };

  const startTraining = () => {
    if (isTraining) return;
    setIsTraining(true);
    setW(INITIAL_W);
    setB(INITIAL_B);
    setEpoch(0);
    
    let currentW = INITIAL_W;
    let currentB = INITIAL_B;
    let currentEpoch = 0;
    const lrW = 0.0001; 
    const lrB = 0.005;

    trainingRef.current = setInterval(() => {
      if (currentEpoch >= 150) {
        clearInterval(trainingRef.current);
        setIsTraining(false);
        return;
      }
      
      let dw = 0;
      let db = 0;
      
      points.forEach(p => {
        const err = (currentW * p.x + currentB) - p.y;
        dw += 2 * err * p.x;
        db += 2 * err;
      });
      
      dw /= points.length;
      db /= points.length;
      
      currentW -= lrW * dw;
      currentB -= lrB * db;
      currentEpoch += 1;
      
      setW(currentW);
      setB(currentB);
      setEpoch(currentEpoch);
      setLoss(calcLoss(points, currentW, currentB));

    }, 30);
  };

  const resetModel = () => {
    clearInterval(trainingRef.current);
    setIsTraining(false);
    setW(INITIAL_W);
    setB(INITIAL_B);
    setEpoch(0);
    setLoss(calcLoss(points, INITIAL_W, INITIAL_B));
  };

  return (
    <div className="ml-playground glass-panel">
      <div className="ml-header">
        <div>
          <h3>Interactive ML: Gradient Descent</h3>
          <p>Watch a simple Linear Regression model learn to fit the data points in real-time.</p>
        </div>
        <div className="ml-stats">
          <div className="stat"><span>Epoch:</span> <strong>{epoch}/150</strong></div>
          <div className="stat"><span>Loss (MSE):</span> <strong>{loss}</strong></div>
        </div>
      </div>
      
      <div className="ml-visualizer">
        <svg viewBox="0 0 100 100" className="ml-svg">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

          {/* Points */}
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={100 - p.y} r="1.5" fill="var(--accent)" opacity="0.8" />
          ))}
          
          {/* Regression Line */}
          <line 
            x1="0" 
            y1={100 - (w * 0 + b)} 
            x2="100" 
            y2={100 - (w * 100 + b)} 
            stroke="var(--secondary)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            className="regression-line"
          />
        </svg>
      </div>

      <div className="ml-actions">
        <button className="btn primary" onClick={startTraining} disabled={isTraining}>
          {isTraining ? 'Training...' : 'Train Model'}
        </button>
        <button className="btn ghost" onClick={resetModel} disabled={isTraining && epoch === 0}>
          Reset
        </button>
      </div>
    </div>
  );
}
