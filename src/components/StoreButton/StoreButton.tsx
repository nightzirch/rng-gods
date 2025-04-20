import Link from "next/link";

export function StoreButton() {
  return (
    <Link
      href="/store"
      className="atma-bold uppercase flex items-center justify-center text-center bg-amber-300 text-black p-4 m-4 rounded-full text-3xl"
    >
      Store
    </Link>
  );
}
