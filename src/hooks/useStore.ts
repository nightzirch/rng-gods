import { useReducer, useEffect } from "react";
import { History } from "../types/History";
import { Store, StoreItemType } from "../types/Store";
import { getCoinsByRarity } from "../utils/coins";
import { loadFromStorage, saveToStorage } from "@/utils/storage";

const STORE_STORAGE_KEY = "game_store";

function StoreReducer(
  state: Store,
  action:
    | { type: "ADD_COIN"; payload: History }
    | { type: "REMOVE_COIN"; payload: StoreItemType }
    | { type: "SET_COINS"; payload: number }
) {
  switch (action.type) {
    case "ADD_COIN":
      return {
        ...state,
        coins: state.coins + getCoinsByRarity(action.payload.rarity),
      };
    case "REMOVE_COIN":
      return {
        ...state,
        coins: state.coins - action.payload.cost,
      };
    case "SET_COINS":
      return {
        ...state,
        coins: action.payload,
      };
    default:
      throw new Error(`Unknown action type`);
  }
}

export const initialStoreState: Store = {
  coins: 0,
};

export function useStore() {
  const [store, storeDispatch] = useReducer(StoreReducer, initialStoreState);

  // Load initial state from localStorage on client side only
  useEffect(() => {
    const savedState = loadFromStorage<Store>(STORE_STORAGE_KEY, initialStoreState);
    storeDispatch({ type: "SET_COINS", payload: savedState.coins });
  }, []); // Only run once on mount

  // Save store to localStorage whenever it changes
  useEffect(() => {
    saveToStorage(STORE_STORAGE_KEY, store);
  }, [store]);

  const addCoinsByHistory = (historyItem: History) => {
    storeDispatch({
      type: "ADD_COIN",
      payload: historyItem,
    });
  };

  const removeCoinsByStoreItem = (storeItem: StoreItemType) => {
    storeDispatch({
      type: "REMOVE_COIN",
      payload: storeItem,
    });
  };

  return { store, addCoinsByHistory, removeCoinsByStoreItem };
}
