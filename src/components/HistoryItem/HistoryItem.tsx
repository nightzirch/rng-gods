"use client";

import { History } from "@/types/History";
import classNames from "classnames";

type HistoryItemProps = {
  item: History;
};

export default function HistoryItem({ item }: HistoryItemProps) {
  const label = `${item.rarity.label} - ${item.rarity.chanceLabel}`;
  return (
    <li
      className={classNames(
        "text-center atma-bold uppercase",
        item.rarity.textColor,
        item.rarity.textSize
      )}
    >
      {label}
    </li>
  );
}
