import type { PlayerRole } from "./player-role.type";
import type { PlayerShape } from "./player-shape.type";
import type { PlayerColor } from "./player-color.type";

export type Player = {
  name: string;
  role: PlayerRole;
  shape: PlayerShape;
  color: PlayerColor;
};
