import { Link } from "react-router-dom";
import { AppRoute } from "../consts/routes";
import { Button } from "../components/ui/button/button";
import "../styles/pages/welcome.css";

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">4 в ряд</h1>
        <p className="welcome-subtitle">
          Интеллектуальный поединок на поле 7×6
        </p>

        <div className="rules-card">
          <h2 className="rules-title">Правила</h2>
          <ul className="rules-list">
            <li>Игроки ходят последовательно, соблюдая очерёдность</li>
            <li>Кликните на колонку — фишка упадёт в неё</li>
            <li>Соберите непрерывную линию из четырёх своих фишек</li>
            <li>Атакуйте по горизонтали, вертикали или диагонали</li>
          </ul>
        </div>

        <Link to={AppRoute.PlayersSetupPage}>
          <Button variant="primary">Играть</Button>
        </Link>
      </div>
    </div>
  );
}
