"use client";

import { Button } from "@/components/Button/Button";
import { Cutscene } from "@/components/Cutscene/Cutscene";
import Header from "@/components/Header/Header";
import HistoryItem from "@/components/HistoryItem/HistoryItem";
import PageContainer from "@/components/PageContainer/PageContainer";
import { RainbowButton } from "@/components/RainbowButton/RainbowButton";
import { HistoryContext } from "@/context/HistoryContext";
import { UpgradeContext } from "@/context/UpgradeContext";
import { StoreContext } from "@/context/StoreContext";
import { getModifierByActiveUpgrades } from "@/utils/upgrade";
import { roll } from "@/utils/rarity";
import { useContext, useState } from "react";

export default function Home() {
  const { history, addToHistory } = useContext(HistoryContext);
  const { addCoinsByHistory } = useContext(StoreContext);
  const { activeUpgrades } = useContext(UpgradeContext);

  const [showVideo, setShowVideo] = useState(false);

  function rollDice() {
    const rollResult = roll();
    const modifier = getModifierByActiveUpgrades(activeUpgrades);
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
    <PageContainer>
      <Header>
        <Button href="inventory">Inventory</Button>
        <Button href="store">Store</Button>
      </Header>

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
    </PageContainer>
  );
}
