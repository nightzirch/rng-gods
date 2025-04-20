"use client";

import HistoryItem from "@/components/HistoryItem/HistoryItem";
import { useHistory } from "./hooks/useHistory";
import { RainbowButton } from "@/components/RainbowButton/RainbowButton";
import { Cutscene } from "@/components/Cutscene/Cutscene";
import { useState } from "react";

export default function Home() {
  const { history, addToHistory } = useHistory();
  const [showVideo, setShowVideo] = useState(false);

  function rollDice() {
    const roll = Math.random();
    const item = addToHistory(roll);

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

      <RainbowButton onClick={rollDice}>Roll</RainbowButton>
    </main>
  );
}
