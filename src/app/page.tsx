'use client';

import HistoryItem from "@/components/HistoryItem/HistoryItem";
import { useReducer } from "react";
import { getRarity } from "./utils/rarity";

export type Rarity = 'Unknown' | 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';

export type History = {
  roll: number;
  timestamp: Date;
  rarity: Rarity
  id: string;
}

function historyReducer(state: History[], action: { type: 'ADD'; payload: History }) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function Home() {
  const [history, historyDispatch] = useReducer(historyReducer, []);


  function rollDice() {
    const roll = Math.random();

    historyDispatch({
      type: 'ADD',
      payload: {
        roll: roll,
        timestamp: new Date(),
        rarity: getRarity(roll),
        id: crypto.randomUUID(),
      }
    })
  }

  return (
    <main className="grid grid-rows-[1fr_auto] flex-col w-full h-screen max-h-screen">
      <ul className="flex flex-col h-full flex-grow justify-end items-center overflow-hidden">
        {history.map((item) => (
          <HistoryItem
            key={item.id}
            item={item} />
        ))}
      </ul>

      <button className="atma-bold uppercase flex items-center justify-center text-center bg-linear-65/decreasing from-violet-700 via-lime-300 to-violet-700 text-black p-4 m-4 rounded-full text-5xl" onClick={rollDice}>Roll</button>
    </main>
  );
}
