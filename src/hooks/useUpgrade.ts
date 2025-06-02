import {
  AccountUpgradeType,
  PermanentModifierType,
  TemporaryModifierType,
} from "@/types/Store";
import { ActiveUpgradeType } from "@/types/Upgrade";
import { useEffect, useReducer } from "react";

function modifierReducer(
  state: ActiveUpgradeType[],
  action:
    | { type: "ADD_TEMPORARY_MODIFIER"; payload: TemporaryModifierType }
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
          durationLeft: action.payload.duration,
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

      return newState.filter(
        (modifier) =>
          modifier.type === "temporaryModifier" && modifier.durationLeft > 0
      );
    default:
      throw new Error(`Unknown action type`);
  }
}

export const initialUpgradeState: ActiveUpgradeType[] = [];

export function useUpgrade() {
  const [activeUpgrades, storeDispatch] = useReducer(
    modifierReducer,
    initialUpgradeState
  );

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

  useEffect(
    () => {
      const tick = setInterval(() => {
        storeDispatch({
          type: "DECREASE_DURATION",
        });
      }, 1000);

      return () => clearInterval(tick);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    activeUpgrades,
    addTemporaryModifier,
    addPermanentModifier,
    addAccountUpgrade,
  };
}
