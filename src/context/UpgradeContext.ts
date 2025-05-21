'use client";';

import { ActiveModifierType, ModifierType } from "@/types/Upgrade";
import { createContext } from "react";

type UpgradeContextType = {
  activeModifiers: ActiveModifierType[];
  addModifier: (modifier: ModifierType) => void;
};

export const initialUpgradeContext: UpgradeContextType = {
  activeModifiers: [],
  addModifier: () => {},
};

export const UpgradeContext = createContext<UpgradeContextType>(
  initialUpgradeContext
);
