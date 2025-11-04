export const PLAYER_ROLE = ["first", "second"] as const;
export type PlayerRole = (typeof PLAYER_ROLE)[number];

export type PlayerMap<T> = Record<1 | 2, T>;