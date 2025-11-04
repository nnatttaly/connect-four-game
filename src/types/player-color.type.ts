export const FIRST_PLAYER_COLORS = [
  "pink",
  "yellow", 
  "blue",
  "purple",
] as const;

export const SECOND_PLAYER_COLORS = [
  "lilac", 
  "green", 
  "red", 
  "orange"
] as const;

export type FirstPlayerColor = (typeof FIRST_PLAYER_COLORS)[number];
export type SecondPlayerColor = (typeof SECOND_PLAYER_COLORS)[number];
export type PlayerColor = FirstPlayerColor | SecondPlayerColor;