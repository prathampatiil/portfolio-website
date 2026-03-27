import { useEffect, useState } from 'react';

export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (e.target.closest('.glass-panel, .btn, .nav-link, a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    // Slight throttle for performance can be added here, but React handles state batching well
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`spotlight-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
}
