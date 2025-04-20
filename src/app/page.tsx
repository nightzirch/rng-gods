"use client";

import { Cutscene } from "@/components/Cutscene/Cutscene";
import HistoryItem from "@/components/HistoryItem/HistoryItem";
import { RainbowButton } from "@/components/RainbowButton/RainbowButton";
import { useState } from "react";
import { useHistory } from "./hooks/useHistory";
import { useStore } from "./hooks/useStore";
import { roll } from "./utils/rarity";

export default function Home() {
  const { history, addToHistory } = useHistory();
  const { store, addCoinsByHistory } = useStore();
  const [showVideo, setShowVideo] = useState(false);

  function rollDice() {
    const rollResult = roll();
    const item = addToHistory(rollResult);
    addCoinsByHistory(item);

    if (item.rarity === "Mythic") {
      setShowVideo(true);

      const video = document.querySelector("video");

      if (video) {
        video.playbackRate = 0.5;
        video.play();
      }

      setTimeout(() => {
        setShowVideo(false);
      }, 1000);
    }
  }

  return (
    <main className="grid grid-rows-[1fr_auto] flex-col w-full h-screen max-h-screen">
      <ul className="flex flex-col h-full flex-grow justify-end items-center overflow-hidden relative">
        {history.map((item) => (
          <HistoryItem key={item.id} item={item} />
        ))}
        {showVideo && <Cutscene />}
      </ul>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-center ">
            Coins: {store.coins}
          </span>
        </div>
        <RainbowButton onClick={rollDice}>Roll</RainbowButton>
      </div>
    </main>
  );
}
