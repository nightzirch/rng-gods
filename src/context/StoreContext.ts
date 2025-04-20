'use client";'

import { initialStoreState } from "@/hooks/useStore";
import { History } from "@/types/History";
import { Store } from "@/types/Store";
import { createContext } from "react";

type StoreContextType = {
  store: Store;
  addCoinsByHistory: (historyItem: History) => void;
};

export const initialStoreContext: StoreContextType = {
  store: initialStoreState,
  addCoinsByHistory: () => {},
};

export const StoreContext =
  createContext<StoreContextType>(initialStoreContext);
