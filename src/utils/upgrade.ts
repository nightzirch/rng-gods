import { ActiveUpgradeType } from "@/types/Upgrade";

export const getChanceByModifiers = (chance: number, modifier: number) => {
  return chance - (1 - chance) * modifier;
};

export const getModifierByActiveUpgrades = (
  upgrades: ActiveUpgradeType[]
): number => {
  let modifier = 0;

  upgrades.forEach((upgrade) => {
    modifier += "luckModifier" in upgrade ? upgrade?.luckModifier : 0;
  });

  return modifier;
};

export const formatModifierByActiveUpgrades = (
  upgrades: ActiveUpgradeType[]
): string => {
  const modifier = getModifierByActiveUpgrades(upgrades);
  return `${Math.round(modifier * 10) / 10}x`;
};
