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

  const addToHistory = (roll: number, modifier: number): History => {
    const historyItem: History = {
      roll: roll,
      timestamp: new Date(),
      rarity: getRarity(roll, modifier),
      id: crypto.randomUUID(),
    };

    historyDispatch({
      type: "ADD",
      payload: historyItem,
    });

    return historyItem;
  };

  return { history, addToHistory };
}
