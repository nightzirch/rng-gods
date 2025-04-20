import { Rarity } from "./Rarity";

export type History = {
  roll: number;
  timestamp: Date;
  rarity: Rarity;
  id: string;
};
