"use client";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen container mx-auto">
      {children}
    </div>
  );
}
