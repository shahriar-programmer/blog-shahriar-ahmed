export default function Search() {
  return (
    <div className="w-full p-8 bg-dark">
      <form className="flex w-full border border-grayWhite">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="block w-full p-3 text-xl outline-none bg-inherit"
        />
        <button
          type="submit"
          className="transition flex items-center justify-center px-3 bg-[#43494C] text-white border-l-1/2 border-grayWhite hover:bg-[#636c70]"
        >
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
