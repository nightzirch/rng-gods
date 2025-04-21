import { StoreItemType } from "@/types/Store";

export type StoreItemProps = {
  item: StoreItemType;
  onClick: () => void;
  disabled?: boolean;
};

export function StoreItem({ item, onClick, disabled }: StoreItemProps) {
  return (
    <button
      className="block h-full w-full not-disabled:cursor-pointer disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-col items-center justify-center bg-slate-400 rounded-xl text-black">
        <span className="text-3xl font-bold text-center ">{item.label}</span>
        <span className="text-3xl font-bold text-center ">
          {item.cost} coins
        </span>
      </div>
    </button>
  );
}
