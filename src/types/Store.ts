export type Store = {
  coins: number;
};

export type StoreItemGenericType = {
  label: string;
  cost: number;
};

export type TemporaryModifierType = StoreItemGenericType & {
  type: "temporaryModifier";
  luckModifier: number;
  duration: number;
};

export type PermanentModifierType = StoreItemGenericType & {
  type: "permanentModifier";
  luckModifier: number;
};

export type AccountUpgradeType = StoreItemGenericType & {
  type: "upgrade";
  subtype: "autoclicker";
};

export type StoreItemType =
  | TemporaryModifierType
  | PermanentModifierType
  | AccountUpgradeType;
