import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

export default function SuggestionPost({
  title,
  slug,
  date,
  category,
  thumbnail,
}) {
  return (
    <div className="">
      <div className="">
        <Link href={`/${slug}`}>
          <Image src={thumbnail} layout="cover" alt="Post Thumbnail" />
        </Link>
      </div>
      <div className="flex flex-col justify-between w-full">
        <Link href={`/${slug}`}>
          <h4 className="text-blue-400 transition text-md hover:underline">
            {title}
          </h4>
        </Link>
        <p className="flex text-xs gap-x-1">
          <span>
            {format(
              new Date(date.year, date.month - 1, date.day),
              "MMMM dd, yyyy"
            )}{" "}
          </span>
          <span>in {category}</span>
        </p>
      </div>
    </div>
  );
}
