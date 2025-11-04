export const PLAYER_COLORS = {
  pink: "#F79AC0",
  yellow: "#F9DC5C",
  blue: "#67C5FF",
  purple: "#7A5CF5",
  lilac: "#C86BFA",
  green: "#52D681",
  red: "#fe4e5fff",
  orange: "#FFA84B",
} as const;

export type PlayerColorKey = keyof typeof PLAYER_COLORS;
