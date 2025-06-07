"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import { StoreItem } from "@/components/StoreItem/StoreItem";
import { UpgradeContext } from "@/context/UpgradeContext";
import { StoreContext } from "@/context/StoreContext";
import { StoreItemType } from "@/types/Store";
import { useContext } from "react";
import { storeItems } from "@/data/store";

export default function Store() {
  const { store, removeCoinsByStoreItem } = useContext(StoreContext);
  const { addTemporaryModifier, addPermanentModifier, addAccountUpgrade } =
    useContext(UpgradeContext);

  function handleItemClick(item: StoreItemType) {
    switch (item.type) {
      case "upgrade":
        addAccountUpgrade(item);
        break;
      case "permanentModifier":
        addPermanentModifier(item);
        break;
      case "temporaryModifier":
        addTemporaryModifier(item);
        break;
      default:
        console.error("Unknown item type");
        return;
    }

    removeCoinsByStoreItem(item);
  }

  const temporaryUpgrades = storeItems.filter(
    (upgrade) => upgrade.type === "temporaryModifier"
  );

  const permanentUpgrades = storeItems.filter(
    (upgrade) => upgrade.type === "permanentModifier"
  );

  const accountUpgrades = storeItems.filter(
    (upgrade) => upgrade.type === "upgrade"
  );

  return (
    <PageContainer>
      <Header>
        <BackButton />
      </Header>

      <main className="flex flex-col gap-20 p-4">
        {temporaryUpgrades && (
          <div className="grid grid-cols-2 gap-4">
            <span className="text-2xl font-bold col-span-2">
              <h2>Temporary upgrades</h2>
            </span>

            {temporaryUpgrades.map((item, index) => (
              <StoreItem
                key={index}
                item={item}
                onClick={() => handleItemClick(item)}
                disabled={store.coins <= item.cost}
              />
            ))}
          </div>
        )}

        {permanentUpgrades && (
          <div className="grid grid-cols-2 gap-4">
            <span className="text-2xl font-bold col-span-2">
              <h2>Permanent upgrades</h2>
            </span>

            {permanentUpgrades.map((item, index) => (
              <StoreItem
                key={index}
                item={item}
                onClick={() => handleItemClick(item)}
                disabled={store.coins <= item.cost}
              />
            ))}
          </div>
        )}

        {accountUpgrades.length && (
          <div className="grid grid-cols-2 gap-4">
            <span className="text-2xl font-bold col-span-2">
              <h2>Account upgrades</h2>
            </span>

            {accountUpgrades.map((item, index) => (
              <StoreItem
                key={index}
                item={item}
                onClick={() => handleItemClick(item)}
                disabled={store.coins <= item.cost}
              />
            ))}
          </div>
        )}
      </main>

      <footer></footer>
    </PageContainer>
  );
}
