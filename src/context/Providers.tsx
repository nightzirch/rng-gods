"use client";

import { StoreContext } from "@/context/StoreContext";
import { useHistory } from "@/hooks/useHistory";
import { useStore } from "@/hooks/useStore";
import { HistoryContext } from "./HistoryContext";
import { UpgradeContext } from "./UpgradeContext";
import { useUpgrade } from "@/hooks/useUpgrade";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { store, addCoinsByHistory, removeCoinsByStoreItem } = useStore();
  const { history, addToHistory } = useHistory();
  const {
    activeUpgrades,
    addAccountUpgrade,
    addPermanentModifier,
    addTemporaryModifier,
  } = useUpgrade();

  return (
    <StoreContext.Provider
      value={{ store, addCoinsByHistory, removeCoinsByStoreItem }}
    >
      <HistoryContext.Provider value={{ history, addToHistory }}>
        <UpgradeContext.Provider
          value={{
            activeUpgrades,
            addTemporaryModifier,
            addAccountUpgrade,
            addPermanentModifier,
          }}
        >
          {children}
        </UpgradeContext.Provider>
      </HistoryContext.Provider>
    </StoreContext.Provider>
  );
}
