import { rarities } from "@/data/rarities";

export type Rarity = {
  label: string;
  chance: number;
  chanceLabel: string;
  coins: number;
  textColor: string;
  textSize: string;
};

export const rarityLabels = rarities.map((rarity) => rarity.label);
export type RarityLabel = (typeof rarityLabels)[number];
