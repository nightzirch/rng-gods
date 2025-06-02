import { StoreItemType } from "@/types/Store";

export type StoreItemProps = {
  item: StoreItemType;
  onClick: () => void;
  disabled?: boolean;
};

export function StoreItem({ item, onClick, disabled }: StoreItemProps) {
  function generateSubtitle(item: StoreItemType) {
    switch (item.type) {
      case "temporaryModifier":
        return `${item.luckModifier}x luck for ${item.duration} seconds`;
      case "permanentModifier":
        return `${item.luckModifier}x luck`;
      case "upgrade":
        return `Autoclicker`;
      default:
        return "";
    }
  }

  return (
    <button
      className="block h-full w-full not-disabled:cursor-pointer disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-xl text-black">
        <span className="text-3xl font-bold text-center ">{item.label}</span>
        <span className="text-3xl font-bold text-center ">
          {generateSubtitle(item)}
        </span>
        <span className="text-3xl font-bold text-center ">
          {item.cost} coins
        </span>
      </div>
    </button>
  );
}
