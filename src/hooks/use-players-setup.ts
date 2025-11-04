import { useState } from "react";
import type { Player } from "../types/index";
import { DEFAULT_FIRST_PLAYER, DEFAULT_SECOND_PLAYER } from "../consts/default-players";

export const usePlayersSetup = () => {
  const [firstPlayer, setFirstPlayer] = useState<Player>(DEFAULT_FIRST_PLAYER);
  const [secondPlayer, setSecondPlayer] = useState<Player>(DEFAULT_SECOND_PLAYER);

  const updateFirst = (updates: Partial<Player>) =>
    setFirstPlayer(prev => ({ ...prev, ...updates }));

  const updateSecond = (updates: Partial<Player>) =>
    setSecondPlayer(prev => ({ ...prev, ...updates }));

  const isValid = firstPlayer.name.trim() !== '' && secondPlayer.name.trim() !== '';

  return {
    firstPlayer,
    secondPlayer,
    updateFirst,
    updateSecond,
    isValid,
  };
};