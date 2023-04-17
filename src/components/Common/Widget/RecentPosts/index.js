import Image from "next/image";
import Link from "next/link";
import ThumbnailImage from "../../../../assets/img/thumbnail.jpg";

export default function RecentPosts() {
  return (
    <div className="flex flex-col w-full h-auto p-8 bg-dark">
      <h3 className="text-lg text-center">Recent Posts</h3>
      <hr className="w-12 mx-auto mt-2 border-grayWhite" />
      <div className="flex flex-col mt-4 gap-y-4">
        {[1, 2, 3, 4].map((post) => (
          <Link href="#" key={post}>
            <div className="flex w-full h-full pb-2 transition border-b border-r-0 border-gray-600 shadow-md hover:shadow-xl gap-x-2">
              <div className="w-1/3">
                <Image
                  src={ThumbnailImage}
                  layout="cover"
                  alt="Recet Post Thumbnail"
                  className="cover"
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <h4 className="text-blue-400 text-md hover:underline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h4>
                <p className="flex text-xs gap-x-4">
                  <span>Aug 8, 2022</span>
                  <span>Javascript</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
