import SuggestionPost from "./SuggestionPost";
import PostThumbnail from "../../assets/img/leetcode-problems.jpg";

export default function SuggestionPostList() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {[1, 2, 3, 4, 5].map((post) => (
        <SuggestionPost
          title="Lorem ipsum, dolor sit amet consectetur adipisicing."
          slug={"random-post"}
          date={{
            month: 10,
            year: 2023,
            day: 23,
          }}
          category="Javascript"
          thumbnail={PostThumbnail}
        />
      ))}
    </div>
  );
}
