import Link from "next/link";

export default function Category() {
  return (
    <div className="flex flex-col w-full p-8 bg-dark">
      <h3 className="text-lg text-center">Cateogry</h3>
      <hr className="w-12 mx-auto mt-2 border-grayWhite"/>
      <div className="mt-4">
        {["Javascript", "Python", "Story", "Dev", "Journey"].map((cat) => (
          <Link key={cat} href="#">
            <p className="flex items-center justify-between p-2 transition border-b border-l border-gray-600 text-blue-500/80 hover:text-blue-500">
              {cat}
              <span>(10)</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
