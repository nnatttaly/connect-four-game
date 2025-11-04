import type { PlayerShape, PlayerColor } from "../../../types/index";
import "./shape-picker.css";

interface Props {
  shapes: readonly PlayerShape[];
  selected: PlayerShape;
  color: PlayerColor;
  onChange: (shape: PlayerShape) => void;
}

export default function ShapePicker({
  shapes,
  selected,
  color,
  onChange,
}: Props) {
  return (
    <div className="form-group">
      <label>Форма фигурки</label>
      <div className="shape-grid">
        {shapes.map((shape) => (
          <button
            key={shape}
            className={`shape-btn ${selected === shape ? "selected" : ""}`}
            onClick={() => onChange(shape)}
          >
            <div className={`shape-icon ${shape} ${color}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
