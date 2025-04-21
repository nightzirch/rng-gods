'use client";';

import { ActiveModifierType, ModifierType } from "@/types/Modifier";
import { createContext } from "react";

type ModifierContextType = {
  activeModifiers: ActiveModifierType[];
  addModifier: (modifier: ModifierType) => void;
};

export const initialModifierContext: ModifierContextType = {
  activeModifiers: [],
  addModifier: () => {},
};

export const ModifierContext = createContext<ModifierContextType>(
  initialModifierContext
);
