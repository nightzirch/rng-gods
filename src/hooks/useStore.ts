import { useReducer } from "react";
import { History } from "../types/History";
import { Store, StoreItemType } from "../types/Store";
import { getCoinsByRarity } from "../utils/coins";

function StoreReducer(
  state: Store,
  action:
    | { type: "ADD_COIN"; payload: History }
    | { type: "REMOVE_COIN"; payload: StoreItemType }
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
    default:
      throw new Error(`Unknown action type`);
  }
}

export const initialStoreState: Store = {
  coins: 0,
};

export function useStore() {
  const [store, storeDispatch] = useReducer(StoreReducer, initialStoreState);

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
