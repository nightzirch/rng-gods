"use client";

import { StoreContext } from "@/context/StoreContext";
import { useHistory } from "@/hooks/useHistory";
import { useStore } from "@/hooks/useStore";
import { HistoryContext } from "./HistoryContext";
import { ModifierContext } from "./ModifierContext";
import { useModifier } from "@/hooks/useModifier";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { store, addCoinsByHistory, removeCoinsByStoreItem } = useStore();
  const { history, addToHistory } = useHistory();
  const { activeModifiers, addModifier } = useModifier();

  return (
    <StoreContext.Provider
      value={{ store, addCoinsByHistory, removeCoinsByStoreItem }}
    >
      <HistoryContext.Provider value={{ history, addToHistory }}>
        <ModifierContext.Provider value={{ activeModifiers, addModifier }}>
          {children}
        </ModifierContext.Provider>
      </HistoryContext.Provider>
    </StoreContext.Provider>
  );
}
