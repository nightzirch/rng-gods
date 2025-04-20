"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import { useStore } from "@/hooks/useStore";

export default function Store() {
  const { store } = useStore();

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

      <main className="overflow-hidden">Main</main>

      <footer className="grid grid-cols-1 gap-4 p-4">Footer</footer>
    </>
  );
}
