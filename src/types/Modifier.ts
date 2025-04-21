import { StoreItemType } from "./Store";

export type ModifierType = Pick<
  StoreItemType,
  "luckModifier" | "durationSeconds"
>;

export type ActiveModifierType = ModifierType & {
  added: string;
};
