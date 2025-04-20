export type RainbowButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function RainbowButton({ children, onClick }: RainbowButtonProps) {
  return (
    <button
      className="atma-bold uppercase flex items-center justify-center text-center bg-linear-65/decreasing from-violet-700 via-lime-300 to-violet-700 text-black p-4 m-4 rounded-full text-5xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
