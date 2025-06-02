"use client";

import { BackButton } from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import { InventoryItem } from "@/components/InventoryItem/InventoryItem";
import PageContainer from "@/components/PageContainer/PageContainer";
import { UpgradeContext } from "@/context/UpgradeContext";
import { useContext } from "react";

export default function Inventory() {
  const { activeUpgrades } = useContext(UpgradeContext);

  const temporaryUpgrades = activeUpgrades.filter(
    (upgrade) => upgrade.type === "temporaryModifier"
  );

  const permanentUpgrades = activeUpgrades.filter(
    (upgrade) => upgrade.type === "permanentModifier"
  );

  const accountUpgrades = activeUpgrades.filter(
    (upgrade) => upgrade.type === "upgrade"
  );

  return (
    <PageContainer>
      <Header>
        <BackButton />
      </Header>

      <main className="flex flex-col gap-20 p-4">
        <div className="grid grid-cols-2 gap-4">
          <span className="text-2xl font-bold col-span-2">
            <h2>Temporary upgrades</h2>
          </span>

          {temporaryUpgrades.length ? (
            temporaryUpgrades.map((item, index) => (
              <InventoryItem key={index} item={item} />
            ))
          ) : (
            <p>No upgrades to show</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <span className="text-2xl font-bold col-span-2">
            <h2>Permanent upgrades</h2>
          </span>

          {permanentUpgrades.length ? (
            permanentUpgrades.map((item, index) => (
              <InventoryItem key={index} item={item} />
            ))
          ) : (
            <p>No upgrades to show</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <span className="text-2xl font-bold col-span-2">
            <h2>Account upgrades</h2>
          </span>

          {accountUpgrades.length ? (
            accountUpgrades.map((item, index) => (
              <InventoryItem key={index} item={item} />
            ))
          ) : (
            <p>No upgrades to show</p>
          )}
        </div>
      </main>

      <footer></footer>
    </PageContainer>
  );
}
