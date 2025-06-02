import {
  PermanentModifierType,
  TemporaryModifierType,
  AccountUpgradeType,
} from "./Store";

export type ActiveTemporaryModifierType = TemporaryModifierType & {
  added: string;
  durationLeft: number;
};

export type ActivePermanentModifierType = PermanentModifierType & {
  added: string;
};

export type ActiveAccountUpgradeType = AccountUpgradeType & {
  added: string;
};

export type ActiveUpgradeType =
  | ActiveTemporaryModifierType
  | ActivePermanentModifierType
  | ActiveAccountUpgradeType;
