import { useState, useCallback } from "react";
import { BOARD_ROWS, BOARD_COLS } from "../consts/game";
import type { GameBoard } from "../types/index";
import type { GameStep } from "../types/index";
import { validator } from "../utils/validator";

const createEmptyBoard = (): GameBoard =>
  Array(BOARD_ROWS)
    .fill(null)
    .map(() => Array(BOARD_COLS).fill("empty" as const));

export const useGameEngine = () => {
  const [moveHistory, setMoveHistory] = useState<number[]>([]);
  const [steps, setSteps] = useState<Record<string, GameStep>>(validator([]));
  const [history, setHistory] = useState<number[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const currentStepKey = `step_${moveHistory.length}`;
  const currentStep = steps[currentStepKey] || steps.step_0;

  const board = createEmptyBoard();
  currentStep.positions.player_1.forEach(([r, c]) => { 
    board[r][c] = "first";
  });
  currentStep.positions.player_2.forEach(([r, c]) => { 
    board[r][c] = "second";
  });

  const currentPlayer: 1 | 2 = moveHistory.length % 2 === 0 ? 1 : 2;

  const makeMove = useCallback(
    (col: number) => {

      if (
        !(
          currentStep.status === "pending" ||
          (currentStep.status === "waiting" && moveHistory.length === 0)
        )
      ) {
        return;
      }

      const isColumnFull = board[0][col] !== "empty";
      if (isColumnFull) return;

      const newHistory = [...moveHistory, col];
      const newSteps = validator(newHistory);

      const lastStep = newSteps[`step_${newHistory.length}`];
      if (!lastStep) return;

      const newHistoryArray = history.slice(0, historyIndex + 1);
      newHistoryArray.push(newHistory);
      setHistory(newHistoryArray);
      setHistoryIndex(newHistoryArray.length - 1);

      setMoveHistory(newHistory);
      setSteps(newSteps);
    },
    [currentStep.status, moveHistory, board, history, historyIndex]
  );

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const prevHistory = history[historyIndex - 1];
    setHistoryIndex(historyIndex - 1);
    setMoveHistory(prevHistory);
    setSteps(validator(prevHistory));
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex + 1 >= history.length) return;
    const nextHistory = history[historyIndex + 1];
    setHistoryIndex(historyIndex + 1);
    setMoveHistory(nextHistory);
    setSteps(validator(nextHistory));
  }, [history, historyIndex]);

  const reset = useCallback(() => {
    setMoveHistory([]);
    setSteps(validator([]));
    setHistory([[]]);
    setHistoryIndex(0);
  }, []);

  return {
    board,
    currentPlayer,
    status: currentStep.status,
    winner: currentStep.winner,
    makeMove,
    undo,
    redo,
    reset,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
  };
};
