import { useAutoclicker } from "@/hooks/useAutoclicker";

export function AutoclickerButton() {
  const {
    isAutoclickerActive,
    startAutoclicker,
    stopAutoclicker,
    hasAutoclickerUpgrade,
  } = useAutoclicker();

  const handleClick = () => {
    if (isAutoclickerActive) {
      stopAutoclicker();
    } else {
      startAutoclicker();
    }
  };

  if (!hasAutoclickerUpgrade) return null;

  return (
    <button
      className="atma-bold uppercase flex items-center justify-center text-center bg-linear-65/decreasing from-violet-700 via-lime-300 to-violet-700 text-black p-4 m-4 rounded-full text-5xl flex-grow"
      onClick={handleClick}
    >
      {isAutoclickerActive ? "Turn Autoclicker off" : "Turn Autoclicker on"}
    </button>
  );
}
