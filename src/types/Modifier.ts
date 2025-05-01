import { StoreItemType } from "./Store";

export type ModifierType = StoreItemType;

export type ActiveModifierType = ModifierType & {
  added: string;
  durationLeft: number;
};
