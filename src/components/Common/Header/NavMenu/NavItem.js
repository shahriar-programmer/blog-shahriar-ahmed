import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ link, text }) {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div
      className={`transition ${
        currentPath == link ? "border-b-grayWhite" : "border-b-transparent"
      } border-b-2 pb-1 hover:opacity-70`}
    >
      <Link href={link} className="py-4">
        {text}
      </Link>
    </div>
  );
}
