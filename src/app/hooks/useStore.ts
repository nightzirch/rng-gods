import { useReducer } from "react";
import { History } from "../types/History";
import { Store } from "../types/Store";
import { getCoinsByRarity } from "../utils/coins";

function StoreReducer(
  state: Store,
  action: { type: "ADD_COIN"; payload: History }
) {
  switch (action.type) {
    case "ADD_COIN":
      return {
        ...state,
        coins: state.coins + getCoinsByRarity(action.payload.rarity),
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const initialState: Store = {
  coins: 0,
};

export function useStore() {
  const [store, storeDispatch] = useReducer(StoreReducer, initialState);

  const addCoinsByHistory = (historyItem: History) => {
    storeDispatch({
      type: "ADD_COIN",
      payload: historyItem,
    });
  };

  return { store, addCoinsByHistory };
}
