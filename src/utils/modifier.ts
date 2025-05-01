import { ActiveModifierType } from "@/types/Modifier";

export const getChanceByModifiers = (chance: number, modifier: number) => {
  return chance - (1 - chance) * modifier;
};

export const getModifierByActiveStoreItems = (
  modifiers: ActiveModifierType[]
): number => {
  let modifier = 0;
  modifiers.forEach((item) => {
    if (item.luckModifier) {
      modifier += item.luckModifier;
    }
  });
  return modifier;
};

export const formatModifierByActiveStoreItems = (
  modifiers: ActiveModifierType[]
): string => {
  const modifier = getModifierByActiveStoreItems(modifiers);
  return `${Math.round(modifier * 10) / 10}x`;
};
