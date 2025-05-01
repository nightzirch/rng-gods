import Link from "next/link";

export function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="atma-bold uppercase flex items-center justify-center text-center bg-amber-300 text-black p-4 m-4 rounded-full text-3xl"
    >
      {children}
    </Link>
  );
}
