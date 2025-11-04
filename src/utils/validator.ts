import { BOARD_ROWS, BOARD_COLS } from "../consts/game";
import type { GameStep } from "../types/index";

export const validator = (moves: number[]): Record<string, GameStep> => {
  const board = Array(BOARD_ROWS)
    .fill(null)
    .map(() => Array(BOARD_COLS).fill(0));
  const steps: Record<string, GameStep> = {
    step_0: { positions: { first: [], second: [] }, status: "pending" },
  };

  const getPositions = (player: 1 | 2): [number, number][] => {
    const pos: [number, number][] = [];
    for (let r = 0; r < BOARD_ROWS; r++)
      for (let c = 0; c < BOARD_COLS; c++)
        if (board[r][c] === player) pos.push([r, c]);
    return pos;
  };

  const checkWin = (
    r: number,
    c: number,
    p: 1 | 2
  ): [number, number][] | null => {
    const dirs = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ] as const;
    for (const [dr, dc] of dirs) {
      const line: [number, number][] = [[r, c]];
      for (let i = 1; i < 4; i++) {
        const nr = r + dr * i,
          nc = c + dc * i;
        if (
          nr >= 0 &&
          nr < BOARD_ROWS &&
          nc >= 0 &&
          nc < BOARD_COLS &&
          board[nr][nc] === p
        )
          line.push([nr, nc]);
        else break;
      }
      for (let i = 1; i < 4; i++) {
        const nr = r - dr * i,
          nc = c - dc * i;
        if (
          nr >= 0 &&
          nr < BOARD_ROWS &&
          nc >= 0 &&
          nc < BOARD_COLS &&
          board[nr][nc] === p
        )
          line.push([nr, nc]);
        else break;
      }
      if (line.length >= 4) return line.slice(0, 4);
    }
    return null;
  };

  for (let i = 0; i < moves.length; i++) {
    const col = moves[i];
    if (col < 0 || col >= BOARD_COLS) continue;

    const player = i % 2 === 0 ? 1 : 2;
    let row = -1;
    for (let r = BOARD_ROWS - 1; r >= 0; r--) {
      if (board[r][col] === 0) {
        board[r][col] = player;
        row = r;
        break;
      }
    }
    if (row === -1) continue;

    const winLine = checkWin(row, col, player);
    const isDraw = !winLine && board.every((r) => r.every((c) => c !== 0));

    const key = `step_${i + 1}`;
    steps[key] = {
      positions: { first: getPositions(1), second: getPositions(2) },
      status: winLine ? "win" : isDraw ? "draw" : "pending",
      winner: winLine
        ? { who: player === 1 ? "first" : "second", positions: winLine }
        : undefined,
    };

    if (winLine || isDraw) break;
  }

  return steps;
};
