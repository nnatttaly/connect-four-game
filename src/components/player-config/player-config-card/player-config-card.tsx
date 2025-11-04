import type { Player, PlayerColor, PlayerShape } from "@/types";
import PlayerNameInput from "../player-name-input/player-name-input";
import ColorPicker from "../color-picker/color-picker";
import ShapePicker from "../shape-picker/shape-picker";
import { PLAYER_SHAPES } from "../../../types/index";
import "./player-config-card.css";

interface PlayerConfigCardProps {
  player: Player;
  availableColors: readonly PlayerColor[];
  onNameChange: (name: string) => void;
  onColorChange: (color: PlayerColor) => void;
  onShapeChange: (shape: PlayerShape) => void;
}

export default function PlayerConfigCard({
  player,
  availableColors,
  onNameChange,
  onColorChange,
  onShapeChange,
}: PlayerConfigCardProps) {
  const title = player.role === "first" ? "Первый игрок" : "Второй игрок";

  return (
    <div className={`player-card player-${player.role}`}>
      <h2 className="player-title">{title}</h2>

      <PlayerNameInput name={player.name} onChange={onNameChange} />
      <ColorPicker
        colors={availableColors}
        selected={player.color}
        onChange={onColorChange}
      />
      <ShapePicker
        shapes={PLAYER_SHAPES}
        selected={player.shape}
        color={player.color}
        onChange={onShapeChange}
      />
    </div>
  );
}
