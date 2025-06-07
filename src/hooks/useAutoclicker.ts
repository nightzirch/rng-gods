import { initialAutoclickerContext } from "@/context/AutoclickerContext";
import { UpgradeContext } from "@/context/UpgradeContext";
import { loadFromStorage, saveToStorage } from "@/utils/storage";
import { useCallback, useContext, useEffect, useState } from "react";

type AutoclickerStorageType = {
  isActive: boolean;
  delay: number;
};

const AUTOCLICKER_STORAGE_KEY = "game_autoclicker";

export function useAutoclicker() {
  const { activeUpgrades } = useContext(UpgradeContext);

  const [isAutoclickerActive, setIsAutoclickerActive] = useState(false);
  const [autoclickerDelay, setAutoclickerDelay] = useState(
    initialAutoclickerContext.autoclickerDelay
  );

  // Check if autoclicker upgrade is owned
  const hasAutoclickerUpgrade = activeUpgrades.some(
    (upgrade) => upgrade.type === "upgrade" && upgrade.subtype === "autoclicker"
  );

  // Load initial state from localStorage
  useEffect(() => {
    const savedState = loadFromStorage<AutoclickerStorageType>(
      AUTOCLICKER_STORAGE_KEY,
      {
        isActive: false,
        delay: initialAutoclickerContext.autoclickerDelay,
      }
    );

    if (hasAutoclickerUpgrade) {
      setIsAutoclickerActive(savedState.isActive);
      setAutoclickerDelay(savedState.delay);
    }
  }, [hasAutoclickerUpgrade, setIsAutoclickerActive, setAutoclickerDelay]);

  // Save state changes to localStorage
  useEffect(() => {
    if (hasAutoclickerUpgrade) {
      saveToStorage(AUTOCLICKER_STORAGE_KEY, {
        isActive: isAutoclickerActive,
        delay: autoclickerDelay,
      });
    }
  }, [hasAutoclickerUpgrade, isAutoclickerActive, autoclickerDelay]);

  const startAutoclicker = useCallback(() => {
    if (hasAutoclickerUpgrade) {
      setIsAutoclickerActive(true);
    }
  }, [hasAutoclickerUpgrade, setIsAutoclickerActive]);

  const stopAutoclicker = useCallback(() => {
    setIsAutoclickerActive(false);
  }, [setIsAutoclickerActive]);

  return {
    hasAutoclickerUpgrade,
    isAutoclickerActive,
    startAutoclicker,
    stopAutoclicker,
    autoclickerDelay,
    setAutoclickerDelay,
  };
}
