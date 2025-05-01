"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import { InventoryItem } from "@/components/InventoryItem/InventoryItem";
import PageContainer from "@/components/PageContainer/PageContainer";
import { ModifierContext } from "@/context/ModifierContext";
import { useContext } from "react";

export default function Inventory() {
  const { activeModifiers } = useContext(ModifierContext);

  return (
    <PageContainer>
      <Header>
        <BackButton />
      </Header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {activeModifiers.map((item, index) => (
            <InventoryItem key={index} item={item} />
          ))}
        </div>
      </main>

      <footer></footer>
    </PageContainer>
  );
}
