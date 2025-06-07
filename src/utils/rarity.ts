import { rarities } from "@/data/rarities";
import { Rarity } from "../types/Rarity";
import { getChanceByModifiers } from "./upgrade";

export function roll(): number {
  return Math.random();
}

export function getRarity(roll: number, modifier: number): Rarity {
  const sortedRarities = rarities.sort((a, b) =>
    a.chance > b.chance ? 1 : -1
  );

  const foundRarity = sortedRarities.find((rarity) => {
    if (roll > getChanceByModifiers(1 - rarity.chance, modifier)) {
      return rarity;
    }
  });

  return foundRarity ?? sortedRarities[sortedRarities.length - 1];
}
