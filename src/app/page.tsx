"use client";

import HistoryItem from "@/components/HistoryItem/HistoryItem";
import { useHistory } from "./hooks/useHistory";

export default function Home() {
  const { history, addToHistory } = useHistory();

  function rollDice() {
    const roll = Math.random();
    addToHistory(roll);
  }

  return (
    <main className="grid grid-rows-[1fr_auto] flex-col w-full h-screen max-h-screen">
      <ul className="flex flex-col h-full flex-grow justify-end items-center overflow-hidden">
        {history.map((item) => (
          <HistoryItem key={item.id} item={item} />
        ))}
      </ul>

      <button
        className="atma-bold uppercase flex items-center justify-center text-center bg-linear-65/decreasing from-violet-700 via-lime-300 to-violet-700 text-black p-4 m-4 rounded-full text-5xl"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  );
}
