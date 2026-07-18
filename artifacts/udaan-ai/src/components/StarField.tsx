import { useMemo } from "react";

export function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 140 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.8 + 0.4,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.6 + 0.1,
    }));
  }, []);

  return (
    <div className="stars-bg">
      {/* Deep space nebula glow — bottom-left (blue) */}
      <div
        className="nebula nebula-blue"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "65%",
          height: "65%",
          background:
            "radial-gradient(ellipse at center, rgba(56,120,220,0.14) 0%, rgba(40,80,180,0.07) 40%, transparent 72%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Deep space nebula glow — bottom-right (purple/magenta) */}
      <div
        className="nebula nebula-purple"
        style={{
          position: "absolute",
          bottom: "-12%",
          right: "-8%",
          width: "55%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(160,50,200,0.12) 0%, rgba(120,30,160,0.06) 40%, transparent 72%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle top-center purple haze for depth */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={
            {
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--duration": star.duration,
              "--delay": star.delay,
              opacity: star.opacity * 0.5,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Shooting star 1 — top-right, angled down-left */}
      <div className="shooting-star shooting-star-1" />
      {/* Shooting star 2 — upper-left area, angled down-right */}
      <div className="shooting-star shooting-star-2" />
      {/* Shooting star 3 — mid-right, shallow angle */}
      <div className="shooting-star shooting-star-3" />
    </div>
  );
}
