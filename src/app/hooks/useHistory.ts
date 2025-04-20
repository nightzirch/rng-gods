import { useReducer } from "react";
import { History } from "../types/History";
import { getRarity } from "../utils/rarity";

function historyReducer(
  state: History[],
  action: { type: "ADD"; payload: History }
) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export function useHistory() {
  const [history, historyDispatch] = useReducer(historyReducer, []);

  const addToHistory = (roll: number) => {
    historyDispatch({
      type: "ADD",
      payload: {
        roll: roll,
        timestamp: new Date(),
        rarity: getRarity(roll),
        id: crypto.randomUUID(),
      },
    });
  };

  return { history, addToHistory };
}
