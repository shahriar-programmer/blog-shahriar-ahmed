import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-2xl font-bold tracking-wider uppercase">
      <Link href="/" className="p-2">_Blog</Link>
    </h1>
  );
}
