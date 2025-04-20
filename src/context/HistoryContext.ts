'use client";';

import { History } from "@/types/History";
import { createContext } from "react";

type HistoryContextType = {
  history: History[];
  addToHistory: (roll: number) => History;
};

export const initialHistoryContext: HistoryContextType = {
  history: [],
  addToHistory: () => {
    return {
      roll: 0,
      timestamp: new Date(),
      rarity: "Common",
      id: "",
    };
  },
};

export const HistoryContext = createContext<HistoryContextType>(
  initialHistoryContext
);
