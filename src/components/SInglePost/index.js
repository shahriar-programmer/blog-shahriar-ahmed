import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";
import SharePost from "./SharePost";
import SuggestionPostList from "./SuggestionPostList";

export default function SinglePost({
  title,
  slug,
  tags,
  category,
  thumbnail,
  date,
  excerpt,
}) {
  return (
    <div className="flex flex-col gap-8 p-8 bg-dark">
      <div>
        <Image src={thumbnail} layout="cover" alt="Post Thumbnail" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl transition md:text-3xl text-white/70">
          {title}
        </h1>
        <p>
          {format(
            new Date(date.year, date.month - 1, date.day),
            "MMMM dd, yyyy"
          )}{" "}
          by Shahriar Ahmed Shovon
        </p>
      </div>
      <div>
        <p className="text-lg md:text-xl">{excerpt}</p>
      </div>
      <SharePost />
      <SuggestionPostList />
      <div>
        <Link className="flex gap-2" href={`/category/${category}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
          <p className="text-blue-500 transition hover:text-white">
            {category}
          </p>
        </Link>
        <div className="flex gap-2" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>

          <p className="text-blue-500">
            {tags.map((tag, index) => (
              <Fragment key={tag}>
                {index != 0 && <span>, </span>}
                <Link
                  href={`/tag/${tag.toLowerCase()}`}
                  className="transition hover:text-white"
                >
                  {tag}
                </Link>
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
