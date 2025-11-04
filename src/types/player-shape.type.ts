export const PLAYER_SHAPES = ["circle", "square", "star", "diamond"] as const;
export type PlayerShape = (typeof PLAYER_SHAPES)[number];
