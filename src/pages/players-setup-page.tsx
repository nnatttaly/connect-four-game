import { Link } from "react-router-dom";
import { AppRoute } from "../consts/routes";
import { Button } from "../components/ui/button/button";
import PlayerConfigCard from "../components/player-config/player-config-card/player-config-card";
import { usePlayersSetup } from "../hooks/use-players-setup";
import { FIRST_PLAYER_COLORS, SECOND_PLAYER_COLORS } from "../types/index";
import "../styles/pages/players-setup.css";

export default function PlayersSetupPage() {
  const { firstPlayer, secondPlayer, updateFirst, updateSecond, isValid } =
    usePlayersSetup();

  return (
    <div className="players-setup-page">
      <div className="players-setup-content">
        <h1 className="setup-title">Настройка игроков</h1>

        <div className="players-container">
          <PlayerConfigCard
            player={firstPlayer}
            availableColors={FIRST_PLAYER_COLORS}
            onNameChange={(name) => updateFirst({ name })}
            onColorChange={(color) => updateFirst({ color })}
            onShapeChange={(shape) => updateFirst({ shape })}
          />
          <PlayerConfigCard
            player={secondPlayer}
            availableColors={SECOND_PLAYER_COLORS}
            onNameChange={(name) => updateSecond({ name })}
            onColorChange={(color) => updateSecond({ color })}
            onShapeChange={(shape) => updateSecond({ shape })}
          />
        </div>

        <div className="action-section">
          <Link to={AppRoute.WelcomePage}>
            <Button variant="secondary">Назад</Button>
          </Link>

          <Link
            to={AppRoute.GamePage}
            state={{ firstPlayer, secondPlayer }}
            onClick={(e) => !isValid && e.preventDefault()}
          >
            <Button variant="primary" disabled={!isValid}>
              Начать игру
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
