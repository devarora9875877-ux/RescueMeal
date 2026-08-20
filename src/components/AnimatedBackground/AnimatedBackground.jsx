import "./AnimatedBackground.css";

function AnimatedBackground() {
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 4,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 10,
  }));
  return (
    <div className="animated-bg">

      <div className="gradient gradient-1"></div>
      <div className="gradient gradient-2"></div>
      <div className="gradient gradient-3"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        ></div>
      ))}

    </div>
  );
}

export default AnimatedBackground;