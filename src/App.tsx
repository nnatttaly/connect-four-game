import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppRoute } from "./consts/routes.js";
import WelcomePage from "./pages/welcome-page.js";
import PlayersSetupPage from "./pages/players-setup-page.js";
import GamePage from "./pages/game-page.js";
import NotFoundPage from "./pages/not-found-page.js";
import type { JSX } from "react";
import { HelmetProvider } from "react-helmet-async";

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.WelcomePage} element={<WelcomePage />} />
          <Route
            path={AppRoute.PlayersSetupPage}
            element={<PlayersSetupPage />}
          />
          <Route path={AppRoute.GamePage} element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
