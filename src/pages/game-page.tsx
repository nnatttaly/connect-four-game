import { useLocation, useNavigate } from "react-router-dom";
import { useGameEngine } from "../hooks/use-game-engine";
import GameBoard from "../components/game/game-board/game-board";
import GameStatus from "../components/game/game-status/game-status";
import GameControls from "../components/game/game-controls";
import type { Player } from "../types/index";
import { AppRoute } from "../consts/routes";
import { PLAYER_COLORS } from "../consts/colors";
import "../styles//pages/game/chip.css";
import "../styles//pages/game/game-page.css";
import "../styles//pages/game/toast.css";


export default function GamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { board, currentPlayer, status, winner, makeMove, reset } =
    useGameEngine();

  const playersData = location.state as {
    firstPlayer: Player;
    secondPlayer: Player;
  } | null;

  if (!playersData) {
    return (
      <div className="game-error">
        <h1>Ошибка</h1>
        <p>Данные игроков не найдены</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate(AppRoute.PlayersSetupPage)}
        >
          Настроить игроков
        </button>
      </div>
    );
  }

  const { firstPlayer, secondPlayer } = playersData;

  const names = { 1: firstPlayer.name, 2: secondPlayer.name };
  const colors = {
    1: PLAYER_COLORS[firstPlayer.color],
    2: PLAYER_COLORS[secondPlayer.color],
  };
  const shapes = { 1: firstPlayer.shape, 2: secondPlayer.shape };

  return (
    <div className="game-page">
      <div className="game-container">
        <h1 className="game-title">4 в ряд</h1>

        <GameStatus
          status={status}
          currentPlayer={currentPlayer}
          winner={winner}
          names={names}
          colors={colors}
          shapes={shapes}
        />

        <GameBoard
          board={board}
          onColumnClick={makeMove}
          winningCells={winner?.positions || []}
          colors={colors}
          shapes={shapes}
        />

        <GameControls
          onRestart={reset}
          onBack={() => navigate(AppRoute.PlayersSetupPage)}
        />
      </div>
    </div>
  );
}
