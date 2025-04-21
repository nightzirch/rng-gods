import { ModifierType, ActiveModifierType } from "@/types/Modifier";
import { useReducer } from "react";

function modifierReducer(
  state: ActiveModifierType[],
  action: { type: "ADD"; payload: ModifierType }
) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, added: Date.now().toString() }];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
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

  return { activeModifiers, addModifier };
}
