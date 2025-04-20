"use client";

import { History } from "@/types/History";
import {
  getChanceByRarity,
  getColorByRarity,
  getSizeByRarity,
} from "@/utils/rarity";
import classNames from "classnames";

type HistoryItemProps = {
  item: History;
};

export default function HistoryItem({ item }: HistoryItemProps) {
  return (
    <li
      className={classNames(
        "text-center atma-bold uppercase",
        getColorByRarity(item.rarity),
        getSizeByRarity(item.rarity)
      )}
    >
      {getChanceByRarity(item.rarity)} - {item.rarity}
    </li>
  );
}
