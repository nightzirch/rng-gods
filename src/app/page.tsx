"use client";

import { Cutscene } from "@/components/Cutscene/Cutscene";
import HistoryItem from "@/components/HistoryItem/HistoryItem";
import { RainbowButton } from "@/components/RainbowButton/RainbowButton";
import { StoreButton } from "@/components/StoreButton/StoreButton";
import { HistoryContext } from "@/context/HistoryContext";
import { ModifierContext } from "@/context/ModifierContext";
import { StoreContext } from "@/context/StoreContext";
import {
  formatModifierByActiveStoreItems,
  getModifierByActiveStoreItems,
} from "@/utils/modifier";
import { roll } from "@/utils/rarity";
import { useContext, useState } from "react";

export default function Home() {
  const { history, addToHistory } = useContext(HistoryContext);
  const { store, addCoinsByHistory } = useContext(StoreContext);
  const { activeModifiers } = useContext(ModifierContext);

  const [showVideo, setShowVideo] = useState(false);

  function rollDice() {
    const rollResult = roll();
    const modifier = getModifierByActiveStoreItems(activeModifiers);
    const item = addToHistory(rollResult, modifier);
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
    <>
      <header className="grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-center ">
            Coins: {store.coins}
          </span>
          <span className="text-3xl font-bold text-center ">
            Luck: {formatModifierByActiveStoreItems(activeModifiers)}
          </span>
        </div>

        <StoreButton />
      </header>

      <main className="overflow-hidden">
        <ul className="flex flex-col h-full flex-grow justify-end items-center overflow-hidden relative">
          {history.map((item) => (
            <HistoryItem key={item.id} item={item} />
          ))}
          {showVideo && <Cutscene />}
        </ul>
      </main>

      <footer className="grid grid-cols-1 gap-4 p-4">
        <RainbowButton onClick={rollDice}>Roll</RainbowButton>
      </footer>
    </>
  );
}
