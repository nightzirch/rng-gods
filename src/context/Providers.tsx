"use client";

import { StoreContext } from "@/context/StoreContext";
import { useHistory } from "@/hooks/useHistory";
import { useStore } from "@/hooks/useStore";
import { HistoryContext } from "./HistoryContext";
import { UpgradeContext } from "./UpgradeContext";
import { useModifier } from "@/hooks/useUpgrade";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { store, addCoinsByHistory, removeCoinsByStoreItem } = useStore();
  const { history, addToHistory } = useHistory();
  const { activeModifiers, addModifier } = useModifier();

  return (
    <StoreContext.Provider
      value={{ store, addCoinsByHistory, removeCoinsByStoreItem }}
    >
      <HistoryContext.Provider value={{ history, addToHistory }}>
        <UpgradeContext.Provider value={{ activeModifiers, addModifier }}>
          {children}
        </UpgradeContext.Provider>
      </HistoryContext.Provider>
    </StoreContext.Provider>
  );
}
