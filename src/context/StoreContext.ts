'use client";';

import { initialStoreState } from "@/hooks/useStore";
import { History } from "@/types/History";
import { Store, StoreItemType } from "@/types/Store";
import { createContext } from "react";

type StoreContextType = {
  store: Store;
  addCoinsByHistory: (historyItem: History) => void;
  removeCoinsByStoreItem: (storeItem: StoreItemType) => void;
};

export const initialStoreContext: StoreContextType = {
  store: initialStoreState,
  addCoinsByHistory: () => {},
  removeCoinsByStoreItem: () => {},
};

export const StoreContext =
  createContext<StoreContextType>(initialStoreContext);
