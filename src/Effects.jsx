import { useEffect, useState } from 'react'
import './Effects.css'

function RainEffect() {
  const [rain, setRain] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).slice(2);

      setRain((x) => [...x, {
        id: id,
        x: Math.random() * window.innerWidth
      }])

      setTimeout(() => {
        setRain((x) => x.filter((x) => x.id !== id))
      }, 5000);
  }, 500 / window.innerWidth * 20);

  return () => clearInterval(interval);
    
  }, []);

  return (<div id="rain">
      {rain.map((r) => (
        <span key={r.id} className="drop" onAnimationEnd={() => {
          setRain((x) => x.filter((x) => x.id !== r.id))
        }}
        style={{
          left: `${r.x <= 10 ? r.x : r.x-15}px`
        }}>.</span>
      ))}
    </div>
    )
}

function Effects() {
  return (
    <div className="effect">
      <RainEffect />
    </div>
  );
}

export default Effects;