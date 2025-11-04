import type { PlayerColor } from "../../../types/index";
import { PLAYER_COLORS } from "../../../consts/colors";
import "./color-picker.css";

interface Props {
  colors: readonly PlayerColor[];
  selected: PlayerColor;
  onChange: (color: PlayerColor) => void;
}

export default function ColorPicker({ colors, selected, onChange }: Props) {
  return (
    <div className="form-group">
      <label>Цвет фигурки</label>
      <div className="color-grid">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-btn ${selected === color ? "selected" : ""}`}
            onClick={() => onChange(color)}
          >
            <div
              className="color-swatch"
              style={{ backgroundColor: PLAYER_COLORS[color] }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
