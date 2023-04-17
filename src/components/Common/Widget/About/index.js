import Image from "next/image";
import Link from "next/link";
import ThumbnailImage from "../../../../assets/img/thumbnail.jpg";

export default function About() {
  return (
    <div className="flex flex-col w-full h-auto p-8 bg-dark">
      <h3 className="text-lg text-center">About</h3>
      <hr className="w-12 mx-auto mt-2 border-grayWhite" />
      <div className="mt-4 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          quidem dolorum est accusamus laborum corporis eius alias blanditiis
          cum perferendis nulla ullam expedita dolores minus mollitia
          exercitationem enim architecto tempora, cumque error. Atque, quam
          asperiores quos veritatis suscipit sed fuga!
        </p>
      </div>
    </div>
  );
}
