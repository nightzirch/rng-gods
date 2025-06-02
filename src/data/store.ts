import { StoreItemType } from "@/types/Store";

export const storeItems: StoreItemType[] = [
  {
    cost: 500,
    label: "x0.5 luck",
    luckModifier: 0.5,
    duration: 60,
    type: "temporaryModifier",
  },
  {
    cost: 1000,
    label: "x1 luck",
    luckModifier: 1,
    duration: 75,
    type: "temporaryModifier",
  },
  {
    cost: 2000,
    label: "x2 luck",
    luckModifier: 2,
    duration: 90,
    type: "temporaryModifier",
  },
  {
    cost: 10000,
    label: "x10 luck",
    luckModifier: 10,
    duration: 120,
    type: "temporaryModifier",
  },
  {
    cost: 100000,
    label: "x10 luck",
    luckModifier: 10,
    type: "permanentModifier",
  },
  {
    cost: 100000,
    label: "Autoclicker",
    type: "upgrade",
    subtype: "autoclicker",
  },
];
