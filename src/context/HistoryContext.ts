'use client";';

import { rarities } from "@/data/rarities";
import { History } from "@/types/History";
import { createContext } from "react";

type HistoryContextType = {
  history: History[];
  addToHistory: (roll: number, modifier: number) => History;
};

export const initialHistoryContext: HistoryContextType = {
  history: [],
  addToHistory: () => {
    return {
      roll: 0,
      timestamp: new Date(),
      rarity: rarities[0],
      id: "",
    };
  },
};

export const HistoryContext = createContext<HistoryContextType>(
  initialHistoryContext
);
