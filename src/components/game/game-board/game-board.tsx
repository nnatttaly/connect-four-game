import type { GameBoard, Position } from "../../../types/index";
import GameCell from "../game-cell";
import { useState } from "react";
import './game-board.css';

interface Props {
  board: GameBoard;
  onColumnClick: (col: number) => void;
  winningCells: Position[];
  colors: Record<1 | 2, string>;
  shapes: Record<1 | 2, string>;
}

export default function GameBoard({
  board,
  onColumnClick,
  winningCells,
  colors,
  shapes,
}: Props) {
  const [toast, setToast] = useState<string | null>(null);

  const handleClick = (col: number) => {
    const isFull = board[0][col] !== "empty";
    if (isFull) {
      setToast("Колонка заполнена!");
      setTimeout(() => setToast(null), 2000);
      return;
    }
    onColumnClick(col);
  };

  return (
    <>
      <div className="game-board">
        {board.map((row, r) => (
          <div key={r} className="board-row">
            {row.map((cell, c) => (
              <GameCell
                key={`${r}-${c}`}
                value={cell}
                isWinning={winningCells.some(
                  ([wr, wc]) => wr === r && wc === c
                )}
                onClick={() => handleClick(c)}
                colors={colors}
                shapes={shapes}
              />
            ))}
          </div>
        ))}
      </div>

      {toast && <div className="toast-warning">{toast}</div>}
    </>
  );
}
