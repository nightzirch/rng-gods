import { useReducer, useEffect } from "react";
import { History } from "../types/History";
import { getRarity } from "../utils/rarity";
import { loadFromStorage, saveToStorage } from "@/utils/storage";

const HISTORY_STORAGE_KEY = "game_history";

const MAX_HISTORY_ITEMS = 100;

function historyReducer(
  state: History[],
  action: { type: "ADD"; payload: History }
) {
  switch (action.type) {
    case "ADD":
      const newHistory = [...state, action.payload];
      return newHistory.slice(-MAX_HISTORY_ITEMS); // Keep only the last 100 items
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export function useHistory() {
  const [history, historyDispatch] = useReducer(historyReducer, []);

  // Load initial history from localStorage on client side only
  useEffect(() => {
    const savedHistory = loadFromStorage<History[]>(HISTORY_STORAGE_KEY, []);
    const recentHistory = savedHistory.slice(-MAX_HISTORY_ITEMS);
    if (recentHistory.length > 0) {
      recentHistory.forEach(item => {
        historyDispatch({ type: "ADD", payload: item });
      });
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    saveToStorage(HISTORY_STORAGE_KEY, history);
  }, [history]);

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
