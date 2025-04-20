import { Rarity } from "../types/Rarity";

export function roll(): number {
  return Math.random();
}

export function getRarity(roll: number): Rarity {
  if (roll < 0.5) {
    // 1 in 2
    return "Common";
  } else if (roll < 0.8) {
    // 1 in 5
    return "Uncommon";
  } else if (roll < 0.9) {
    // 1 in 10
    return "Rare";
  } else if (roll < 0.96) {
    // 1 in 25
    return "Epic";
  } else if (roll < 0.98) {
    // 1 in 50
    return "Legendary";
  } else if (roll < 0.99) {
    // 1 in 100
    return "Mythic";
  }
  return "Mythic";
}

export function getChanceByRarity(rarity: Rarity): string {
  switch (rarity) {
    case "Common":
      return "1 in 2";
    case "Uncommon":
      return "1 in 5";
    case "Rare":
      return "1 in 10";
    case "Epic":
      return "1 in 25";
    case "Legendary":
      return "1 in 50";
    case "Mythic":
      return "1 in 100";
    default:
      return "Unknown";
  }
}

export function getColorByRarity(rarity: Rarity): string {
  switch (rarity) {
    case "Common":
      return "text-green-500";
    case "Uncommon":
      return "text-blue-500";
    case "Rare":
      return "text-yellow-500";
    case "Epic":
      return "text-pink-500";
    case "Legendary":
      return "text-orange-500";
    case "Mythic":
      return "text-red-500";
    case "Unknown":
      return "text-white";
    default:
      return "";
  }
}
export function getSizeByRarity(rarity: Rarity): string {
  switch (rarity) {
    case "Rare":
      return "text-2xl";
    case "Epic":
      return "text-3xl";
    case "Legendary":
      return "text-4xl";
    case "Mythic":
      return "text-5xl";
    default:
      return "text-xl";
  }
}
