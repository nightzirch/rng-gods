"use client";

import { StoreContext } from "@/context/StoreContext";
import { useAutoclicker } from "@/hooks/useAutoclicker";
import { useHistory } from "@/hooks/useHistory";
import { useStore } from "@/hooks/useStore";
import { useUpgrade } from "@/hooks/useUpgrade";
import { AutoclickerContext } from "./AutoclickerContext";
import { HistoryContext } from "./HistoryContext";
import { UpgradeContext } from "./UpgradeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { store, addCoinsByHistory, removeCoinsByStoreItem } = useStore();
  const { history, addToHistory } = useHistory();
  const {
    activeUpgrades,
    addAccountUpgrade,
    addPermanentModifier,
    addTemporaryModifier,
  } = useUpgrade();
  const {
    hasAutoclickerUpgrade,
    isAutoclickerActive,
    startAutoclicker,
    stopAutoclicker,
    autoclickerDelay,
    setAutoclickerDelay,
  } = useAutoclicker();

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
          <AutoclickerContext.Provider
            value={{
              hasAutoclickerUpgrade,
              isAutoclickerActive,
              autoclickerDelay,
              setAutoclickerDelay,
              startAutoclicker,
              stopAutoclicker,
            }}
          >
            {children}
          </AutoclickerContext.Provider>
        </UpgradeContext.Provider>
      </HistoryContext.Provider>
    </StoreContext.Provider>
  );
}
