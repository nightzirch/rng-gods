"use client";

import { createContext } from "react";

type AutoclickerContextType = {
  hasAutoclickerUpgrade: boolean;
  isAutoclickerActive: boolean;
  startAutoclicker: () => void;
  stopAutoclicker: () => void;
  autoclickerDelay: number;
  setAutoclickerDelay: (delay: number) => void;
};

export const initialAutoclickerContext: AutoclickerContextType = {
  hasAutoclickerUpgrade: false,
  isAutoclickerActive: false,
  startAutoclicker: () => {},
  stopAutoclicker: () => {},
  autoclickerDelay: 1000,
  setAutoclickerDelay: () => {},
};

export const AutoclickerContext = createContext<AutoclickerContextType>(
  initialAutoclickerContext
);
