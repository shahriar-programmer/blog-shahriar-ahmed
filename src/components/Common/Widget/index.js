import About from "./About";
import Category from "./Category";
import RecentPosts from "./RecentPosts";
import Search from "./Search";

export default function Widget({ className }) {
  return (
    <div className={`md:w-3/6 w-full flex flex-col gap-5`}>
      <Search />
      <Category />
      <RecentPosts />
      <About />
    </div>
  );
}
