import { ModifierType, ActiveModifierType } from "@/types/Upgrade";
import { useEffect, useReducer } from "react";

function modifierReducer(
  state: ActiveModifierType[],
  action: { type: "ADD"; payload: ModifierType } | { type: "DECREASE_DURATION" }
) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          ...action.payload,
          added: Date.now().toString(),
          durationLeft: action.payload.duration,
        },
      ];
    case "DECREASE_DURATION":
      const newState = state.map((modifier) => ({
        ...modifier,
        durationLeft: modifier.durationLeft - 1,
      }));
      return newState.filter((modifier) => modifier.durationLeft > 0);
    default:
      throw new Error(`Unknown action type`);
  }
}

export const initialModifierState: ActiveModifierType[] = [];

export function useModifier() {
  const [activeModifiers, storeDispatch] = useReducer(
    modifierReducer,
    initialModifierState
  );

  const addModifier = (modifier: ModifierType) => {
    storeDispatch({
      type: "ADD",
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

  return { activeModifiers, addModifier };
}
