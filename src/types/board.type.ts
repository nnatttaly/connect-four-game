import { BOARD_ROWS, BOARD_COLS } from "../consts/game";

export type CellValue = "empty" | "first" | "second";
export type GameBoard = CellValue[][];
export type Position = [row: number, col: number];

export const BOARD_DIMENSIONS = { rows: BOARD_ROWS, cols: BOARD_COLS } as const;
