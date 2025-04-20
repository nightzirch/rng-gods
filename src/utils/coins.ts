import { Rarity } from "../types/Rarity";

export function getCoinsByRarity(rarity: Rarity): number {
  switch (rarity) {
    case "Common":
      return 2;
    case "Uncommon":
      return 5;
    case "Rare":
      return 10;
    case "Epic":
      return 25;
    case "Legendary":
      return 50;
    case "Mythic":
      return 100;
    default:
      return 0;
  }
}
