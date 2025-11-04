import type { GameStatus, WinnerInfo } from "./status.type";
import type { Position } from "./board.type";

export interface PlayerPositions {
  first: Position[];
  second: Position[];
}

export interface GameStep {
  positions: PlayerPositions;
  status: GameStatus;
  winner?: WinnerInfo;
}
