import type { PlayerRole } from "./player-role.type";
import type { Position } from "./board.type";

export const GAME_STATUS = ["waiting", "pending", "win", "draw"] as const;
export type GameStatus = (typeof GAME_STATUS)[number];

export interface WinnerInfo {
  who: PlayerRole;
  positions: Position[];
}
