import { useState, useEffect, useRef } from 'react';
import type { GameStatus, WinnerInfo } from "../../../types/index";
import type { PlayerRole } from "../../../types/index";
import Confetti from "../confetti/confetti";
import "./game-status.css";

interface Props {
  status: GameStatus;
  currentPlayer: 1 | 2;
  winner?: WinnerInfo;
  names: Record<1 | 2, string>;
  colors: Record<1 | 2, string>;
  shapes: Record<1 | 2, string>;
}

export default function GameStatus({ status, currentPlayer, winner, names, colors, shapes }: Props) {
  const [showConfetti, setShowConfetti] = useState(false);
  const winIdRef = useRef(0); 

  useEffect(() => {
    if (status === 'win') {
      winIdRef.current += 1; 
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [status]);

  const getMessage = (): string => {
    if (status === 'win') {
      const role: PlayerRole = winner!.who;
      return `Победил: ${names[role === 'first' ? 1 : 2]}!`;
    }
    if (status === 'draw') return 'Ничья!';
    if (status === 'pending') return `Ход: ${names[currentPlayer]}`;
    return 'Готовы к игре!';
  };

  const chip = status === 'pending' && (
    <div
      className={`status-chip ${shapes[currentPlayer]}`}
      style={{ backgroundColor: colors[currentPlayer] }}
    />
  );

  return (
    <>
      <div className={`game-status ${status}`}>
        <h2>
          {getMessage()} {chip}
        </h2>
      </div>

      {showConfetti && <Confetti key={winIdRef.current} trigger={showConfetti} />}
    </>
  );
}