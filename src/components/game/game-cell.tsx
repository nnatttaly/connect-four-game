import type { CellValue } from "../../types/index";

interface Props {
  value: CellValue;
  isWinning: boolean;
  onClick: () => void;
  colors: Record<1 | 2, string>;
  shapes: Record<1 | 2, string>;
}

export default function GameCell({
  value,
  isWinning,
  onClick,
  colors,
  shapes,
}: Props) {
  if (value === "empty") return <div className="game-cell" onClick={onClick} />;

  const player = value === "first" ? 1 : 2;
  const color = colors[player];
  const shape = shapes[player];

  return (
    <div className="game-cell" onClick={onClick}>
      <div
        className={`game-chip ${shape} ${isWinning ? "win-chip" : ""}`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
