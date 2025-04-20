"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import { StoreContext } from "@/context/StoreContext";
import { useContext } from "react";

export default function Store() {
  const { store } = useContext(StoreContext);

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

      <main className="overflow-hidden"></main>

      <footer></footer>
    </>
  );
}
