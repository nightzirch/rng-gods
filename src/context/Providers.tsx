"use client";

import { StoreContext } from "@/context/StoreContext";
import { useHistory } from "@/hooks/useHistory";
import { useStore } from "@/hooks/useStore";
import { HistoryContext } from "./HistoryContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { store, addCoinsByHistory } = useStore();
  const { history, addToHistory } = useHistory();

  return (
    <StoreContext.Provider value={{ store, addCoinsByHistory }}>
      <HistoryContext.Provider value={{ history, addToHistory }}>
        {children}
      </HistoryContext.Provider>
    </StoreContext.Provider>
  );
}
