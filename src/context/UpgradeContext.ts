'use client";';

import {
  AccountUpgradeType,
  PermanentModifierType,
  TemporaryModifierType,
} from "@/types/Store";
import { ActiveUpgradeType } from "@/types/Upgrade";
import { createContext } from "react";

type UpgradeContextType = {
  activeUpgrades: ActiveUpgradeType[];
  addTemporaryModifier: (modifier: TemporaryModifierType) => void;
  addPermanentModifier: (modifier: PermanentModifierType) => void;
  addAccountUpgrade: (upgrade: AccountUpgradeType) => void;
};

export const initialUpgradeContext: UpgradeContextType = {
  activeUpgrades: [],
  addTemporaryModifier: () => {},
  addPermanentModifier: () => {},
  addAccountUpgrade: () => {},
};

export const UpgradeContext = createContext<UpgradeContextType>(
  initialUpgradeContext
);
