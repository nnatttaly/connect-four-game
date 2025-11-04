import "./confetti.css";

interface ConfettiProps {
  trigger: boolean;
}

export default function Confetti({ trigger }: ConfettiProps) {
  if (!trigger) return null;

  const pieces = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 2}s`,
    color: [
      "#f56565",
      "#ed8936",
      "#ecc94b",
      "#48bb78",
      "#38b2ac",
      "#4299e1",
      "#9f7aea",
      "#ed64a6",
    ][Math.floor(Math.random() * 8)],
    size: `${Math.random() * 12 + 8}px`,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
