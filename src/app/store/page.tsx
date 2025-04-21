"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import { StoreItem } from "@/components/StoreItem/StoreItem";
import { ModifierContext } from "@/context/ModifierContext";
import { StoreContext } from "@/context/StoreContext";
import { StoreItemType } from "@/types/Store";
import { useContext } from "react";

export default function Store() {
  const { store, removeCoinsByStoreItem } = useContext(StoreContext);
  const { addModifier } = useContext(ModifierContext);

  function handleItemClick(item: StoreItemType) {
    addModifier(item);
    removeCoinsByStoreItem(item);
  }

  const storeItems: StoreItemType[] = [
    {
      cost: 500,
      label: "x0.5 luck",
      luckModifier: 0.5,
      durationSeconds: 60,
    },
    {
      cost: 2000,
      label: "x2 luck",
      luckModifier: 2,
      durationSeconds: 60,
    },
    {
      cost: 10000,
      label: "x10 luck",
      luckModifier: 10,
      durationSeconds: 60,
    },
  ];

  return (
    <>
      <header className="grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-center ">
            Coins: {store.coins}
          </span>
        </div>

        <BackButton />
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {storeItems.map((item, index) => (
            <StoreItem
              key={index}
              item={item}
              onClick={() => handleItemClick(item)}
              disabled={store.coins <= item.cost}
            />
          ))}
        </div>
      </main>

      <footer></footer>
    </>
  );
}
