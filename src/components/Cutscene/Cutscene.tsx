export function Cutscene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <video className="w-full h-full" width="720" autoPlay preload="auto" muted>
        <source src="/videos/1in100.mov" type="video/mp4" />
      </video>
    </div>
  );
}
