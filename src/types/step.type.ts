import type { Position } from "./board.type";

export interface PlayerPositions {
  first: Position[];
  second: Position[];
}

export interface GameStep {
  positions: {
    player_1: [number, number][];
    player_2: [number, number][];
  };
  status: "waiting" | "pending" | "win" | "draw";
  winner?: {
    who: "player_1" | "player_2";
    positions: [number, number][];
  };
}
