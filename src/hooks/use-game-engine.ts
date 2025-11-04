import { useState, useCallback } from 'react';
import { BOARD_ROWS, BOARD_COLS } from '../consts/game';
import type { GameBoard } from "../types/index";
import type { GameStep } from "../types/index";
import { validator } from '../utils/validator';

const createEmptyBoard = (): GameBoard =>
  Array(BOARD_ROWS).fill(null).map(() => Array(BOARD_COLS).fill('empty' as const));

export const useGameEngine = () => {
  const [moveHistory, setMoveHistory] = useState<number[]>([]);
  const initialSteps = validator([]);
  const [steps, setSteps] = useState<Record<string, GameStep>>(initialSteps);

  const currentStep = steps[`step_${moveHistory.length}`] || steps.step_0;
  const board = createEmptyBoard();

  currentStep.positions.first.forEach(([r, c]) => { board[r][c] = 'first'; });
  currentStep.positions.second.forEach(([r, c]) => { board[r][c] = 'second'; });

  const currentPlayer: 1 | 2 = moveHistory.length % 2 === 0 ? 1 : 2;

  const makeMove = useCallback((col: number) => {
    if (currentStep.status !== 'pending') return;

    const isColumnFull = board[0][col] !== 'empty';
    if (isColumnFull) {
      console.warn(`Колонка ${col + 1} заполнена!`);
      return;
    }

    const newHistory = [...moveHistory, col];
    const newSteps = validator(newHistory);

    const lastStep = newSteps[`step_${newHistory.length}`];
    if (!lastStep || lastStep.positions.first.length + lastStep.positions.second.length !== newHistory.length) {
      return;
    }

    setMoveHistory(newHistory);
    setSteps(newSteps);
  }, [currentStep.status, moveHistory, board]);

  const reset = useCallback(() => {
    setMoveHistory([]);
    setSteps(validator([]));
  }, []);

  return {
    board,
    currentPlayer,
    status: currentStep.status,
    winner: currentStep.winner,
    makeMove,
    reset,
  };
};