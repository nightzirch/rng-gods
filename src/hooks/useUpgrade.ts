import {
  AccountUpgradeType,
  PermanentModifierType,
  TemporaryModifierType,
} from "@/types/Store";
import { ActiveUpgradeType } from "@/types/Upgrade";
import { useEffect, useReducer } from "react";
import { loadFromStorage, saveToStorage } from "@/utils/storage";

const UPGRADE_STORAGE_KEY = "game_upgrades";

function upgradeReducer(
  state: ActiveUpgradeType[],
  action:
    | {
        type: "ADD_TEMPORARY_MODIFIER";
        payload: TemporaryModifierType & { durationLeft?: number };
      }
    | { type: "ADD_PERMANENT_MODIFIER"; payload: PermanentModifierType }
    | { type: "ADD_ACCOUNT_UPGRADE"; payload: AccountUpgradeType }
    | { type: "DECREASE_DURATION" }
) {
  switch (action.type) {
    case "ADD_TEMPORARY_MODIFIER":
      return [
        ...state,
        {
          ...action.payload,
          added: Date.now().toString(),
          durationLeft: action.payload.durationLeft ?? action.payload.duration,
        },
      ];
    case "ADD_PERMANENT_MODIFIER":
      return [
        ...state,
        {
          ...action.payload,
          added: Date.now().toString(),
        },
      ];
    case "ADD_ACCOUNT_UPGRADE":
      return [
        ...state,
        {
          ...action.payload,
          added: Date.now().toString(),
        },
      ];
    case "DECREASE_DURATION":
      const newState = state.map((modifier) => {
        if (modifier.type === "temporaryModifier") {
          return {
            ...modifier,
            durationLeft: modifier.durationLeft - 1,
          };
        }

        return modifier;
      });

      return newState.filter((modifier) =>
        "durationLeft" in modifier ? modifier.durationLeft > 0 : true
      );
    default:
      throw new Error(`Unknown action type`);
  }
}

export const initialUpgradeState: ActiveUpgradeType[] = [];

export function useUpgrade() {
  const [activeUpgrades, storeDispatch] = useReducer(
    upgradeReducer,
    initialUpgradeState
  );

  // Load initial state from localStorage on client side only
  useEffect(() => {
    const savedUpgrades = loadFromStorage<ActiveUpgradeType[]>(
      UPGRADE_STORAGE_KEY,
      []
    );

    savedUpgrades.forEach((upgrade) => {
      if (upgrade.type === "temporaryModifier") {
        const remainingDuration = upgrade.durationLeft;

        if (remainingDuration > 0) {
          storeDispatch({
            type: "ADD_TEMPORARY_MODIFIER",
            payload: {
              ...upgrade,
              durationLeft: remainingDuration,
            },
          });
        }
      } else if (upgrade.type === "permanentModifier") {
        storeDispatch({ type: "ADD_PERMANENT_MODIFIER", payload: upgrade });
      } else if (upgrade.type === "upgrade") {
        storeDispatch({ type: "ADD_ACCOUNT_UPGRADE", payload: upgrade });
      }
    });
  }, []);

  // Save upgrades to localStorage whenever they change
  useEffect(() => {
    saveToStorage(UPGRADE_STORAGE_KEY, activeUpgrades);
  }, [activeUpgrades]);

  // Duration decrease timer
  useEffect(() => {
    const tick = setInterval(() => {
      storeDispatch({
        type: "DECREASE_DURATION",
      });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  const addTemporaryModifier = (modifier: TemporaryModifierType) => {
    storeDispatch({
      type: "ADD_TEMPORARY_MODIFIER",
      payload: modifier,
    });
  };

  const addPermanentModifier = (modifier: PermanentModifierType) => {
    storeDispatch({
      type: "ADD_PERMANENT_MODIFIER",
      payload: modifier,
    });
  };

  const addAccountUpgrade = (modifier: AccountUpgradeType) => {
    storeDispatch({
      type: "ADD_ACCOUNT_UPGRADE",
      payload: modifier,
    });
  };

  return {
    activeUpgrades,
    addTemporaryModifier,
    addPermanentModifier,
    addAccountUpgrade,
  };
}
