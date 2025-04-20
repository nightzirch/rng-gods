'use client';

import { History } from "@/app/page";
import { getChanceByRarity, getColorByRarity } from "@/app/utils/rarity";
import classNames from "classnames";

type HistoryItemProps = {
  item: History;
}

export default function HistoryItem({ item }: HistoryItemProps) {
  return (
    <li className={classNames("text-center atma-bold uppercase text-4xl", getColorByRarity(item.rarity))}>
      {getChanceByRarity(item.rarity)} - {item.rarity}
    </li>
  );
}
