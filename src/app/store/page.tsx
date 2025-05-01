"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
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
      duration: 60,
    },
    {
      cost: 2000,
      label: "x2 luck",
      luckModifier: 2,
      duration: 90,
    },
    {
      cost: 10000,
      label: "x10 luck",
      luckModifier: 10,
      duration: 120,
    },
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton />
      </Header>

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
    </PageContainer>
  );
}
