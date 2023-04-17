import PostItem from "./PostItem";
import PostThumbnail from "../../assets/img/leetcode-problems.jpg";

export default function PostList() {
  return (
    <div className="flex flex-col w-full gap-4">
      {[1, 2, 3].map((post) => (
        <PostItem
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          inventore!"
          slug={"first-post"}
          tags={["Git", "JS", "Tutorial"]}
          category={"Javascript"}
          thumbnail={PostThumbnail}
          date={{
            year: 2023,
            month: 10,
            day: 23,
          }}
          excerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum omnis,
        velit sed eius temporibus praesentium porro harum fuga perspiciatis
        vel, cum corporis sapiente delectus, doloribus dolore iste
        voluptatibus rem minus earum mollitia. Sed aut rem ex nobis
        voluptas, molestias enim a commodi, itaque, ratione inventore? Optio
        atque, sed repellendus omnis, veritatis aliquam qui exercitationem,
        provident dolor laboriosam reiciendis porro in"
        />
      ))}
    </div>
  );
}
