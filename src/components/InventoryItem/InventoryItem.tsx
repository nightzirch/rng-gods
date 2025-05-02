import { ActiveModifierType } from "@/types/Modifier";

export type StoreItemProps = {
  item: ActiveModifierType;
};

export function InventoryItem({ item }: StoreItemProps) {
  const widthPercentage = (item.durationLeft / item.duration) * 100;

  return (
    <div className="relative px-6 py-8 flex flex-col items-center justify-center bg-white/75 rounded-xl text-black overflow-hidden">
      <span className="text-3xl font-bold text-center ">{item.label}</span>
      <span className="text-3xl font-bold text-center ">
        {item.durationLeft} seconds
      </span>

      <div
        className="absolute top-0 bottom-0 left-0 bg-white h-full -z-1 rounded-xl transition-all duration-1000 ease-linear"
        style={{ width: `${widthPercentage}%` }}
      ></div>
    </div>
  );
}
