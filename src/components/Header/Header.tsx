"use client";

import { UpgradeContext } from "@/context/UpgradeContext";
import { StoreContext } from "@/context/StoreContext";
import { formatModifierByActiveStoreItems } from "@/utils/upgrade";
import { useContext } from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  const { store } = useContext(StoreContext);
  const { activeModifiers } = useContext(UpgradeContext);

  return (
    <header className="grid grid-cols-2 gap-4 p-4">
      <div className="flex flex-col items-start justify-center">
        <span className="text-3xl font-bold text-center ">
          Coins: {store.coins}
        </span>
        <span className="text-3xl font-bold text-center ">
          Luck: {formatModifierByActiveStoreItems(activeModifiers)}
        </span>
      </div>

      <div className="flex justify-end gap-2">{children}</div>
    </header>
  );
}
