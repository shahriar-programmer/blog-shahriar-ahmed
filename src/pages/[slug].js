import Image from "next/image";
import PostThumbnail from "../assets/img/leetcode-problems.jpg";
import { format } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import SinglePost from "@/components/SInglePost";

export default function Post() {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-4">
        <SinglePost
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
          excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vitae ut eveniet delectus dignissimos? Quisquam doloremque nam
          voluptatem assumenda velit tempora, numquam magni. Magni nemo velit,
          necessitatibus fugiat enim non accusamus officiis modi? Aperiam ab
          odio eos magnam ullam, ducimus dolores, porro mollitia architecto
          perspiciatis iure? Illo nulla libero laboriosam? Nam omnis vero,
          aliquam voluptatem perferendis repellendus, velit sed nulla
          consequatur suscipit qui aspernatur rem voluptate? Excepturi,
          accusamus! Pariatur soluta numquam doloremque commodi officiis optio
          voluptatibus doloribus velit neque, ratione qui odit animi. Eveniet
          molestiae quasi quisquam id possimus sed nesciunt excepturi voluptatum
          saepe deserunt, voluptatem praesentium, illum qui. Ea ex explicabo
          sunt asperiores eveniet sequi architecto quibusdam deleniti unde
          aliquam, ipsam aut praesentium necessitatibus quia veritatis
          voluptatibus dolorem dolores, ipsum rerum. Et porro unde nesciunt
          similique hic, cupiditate beatae sapiente totam nam commodi
          reprehenderit tempore odit quod placeat veniam deserunt laboriosam
          nulla aperiam excepturi! Nostrum, cum totam laboriosam sit aut id
          saepe voluptate iste alias impedit delectus reiciendis aliquam porro,
          voluptatem libero voluptas fuga sint quas minus temporibus?
          Repellendus dignissimos quam nobis aperiam voluptates ducimus
          distinctio blanditiis, facere perspiciatis quis recusandae molestiae
          sit temporibus ipsam architecto fugiat optio ratione vero iste numquam
          deleniti quibusdam nemo eius. Perferendis id, porro cumque
          necessitatibus ex vitae velit illo? Repudiandae pariatur sed incidunt
          laboriosam quaerat nobis impedit, aut soluta voluptatibus amet nihil
          nulla molestiae, voluptate magnam qui nostrum illum praesentium atque
          tenetur exercitationem, doloribus alias obcaecati dicta. Quibusdam
          alias sapiente necessitatibus nobis facilis, laborum et similique
          doloremque vero minus quae recusandae quidem illo. Magnam eos cum enim
          dicta quae labore? Molestiae tempore, aut vero natus veritatis vitae
          obcaecati consequatur necessitatibus itaque sit delectus expedita
          dolorem aliquam voluptas, veniam eius officiis temporibus velit. Hic
          inventore ad explicabo ex assumenda, ducimus quam quo eaque repellat
          maiores cum voluptates praesentium obcaecati nostrum possimus
          consequuntur id. Officia illum doloremque libero facere veniam, sint
          blanditiis perferendis quam nulla sapiente, eum tenetur voluptatem
          quisquam quaerat rerum natus ipsum adipisci debitis ducimus.
          Architecto nemo quisquam quos vitae atque dignissimos commodi quas
          natus mollitia blanditiis reiciendis dolore quod ducimus perspiciatis
          facere maxime possimus voluptatem minus ratione itaque, recusandae
          officiis eveniet! Voluptatibus ducimus repellendus recusandae animi
          temporibus excepturi neque labore? Dolorum deserunt dignissimos, quam,
          praesentium mollitia, sed aperiam rem numquam quia ullam nihil amet
          aliquam ex fugiat animi cupiditate voluptates ducimus perferendis
          provident! Dignissimos repellendus aut sit, nam eligendi delectus
          necessitatibus provident atque aspernatur esse corporis animi.
          Perferendis odit nam labore et sequi cupiditate velit hic aperiam
          dolore vel exercitationem dolorum est esse at necessitatibus expedita
          maxime nihil, assumenda incidunt asperiores quo ducimus distinctio
          veritatis. Consectetur dolorum nihil illo rem quaerat asperiores porro
          at vel distinctio hic voluptatem est, mollitia temporibus quis quae
          iure explicabo corrupti dolore. Eius consequatur deleniti quae sequi,
          quas fugit eveniet exercitationem enim totam rerum necessitatibus
          temporibus cumque id consectetur nulla molestiae repudiandae nostrum!
          Obcaecati, fugiat iusto. Perferendis voluptatem ipsam illo? Ipsam hic
          laboriosam aut, voluptatibus eaque temporibus rem, pariatur quo,
          maxime iure mollitia enim magnam odit repellat! Adipisci, porro
          aliquam ullam iure, enim fugiat sed corporis suscipit officia delectus
          quia ducimus nihil ipsa hic possimus odit. Unde rerum quaerat debitis?
          Harum aperiam eaque quae dicta saepe? Cupiditate harum laudantium
          natus! Optio perferendis, totam fugit adipisci voluptates laborum.
          Quidem architecto laboriosam inventore molestias explicabo aspernatur
          ab ex hic mollitia expedita vero dolorum ipsum laudantium sit corporis
          repellat animi, sint provident ea ad aliquam aliquid ut neque odio.
          Architecto dolorem sunt ad non enim nemo eum vel, neque atque ullam
          quia nihil! Eveniet blanditiis eius ipsum dolorem at repudiandae
          nesciunt impedit quam omnis aspernatur deserunt quo, incidunt minus
          exercitationem pariatur quos amet, maxime porro. Odio nisi facere unde
          dolore quidem, aperiam, voluptates earum molestias, eligendi labore ut
          a corrupti inventore cumque repellendus omnis asperiores optio hic
          repudiandae quae expedita error facilis qui! Voluptate, minima?
          Doloribus quas perspiciatis, inventore quasi tempora voluptates
          dolorum ab praesentium quos laboriosam voluptate omnis deleniti
          provident ex ut illum quo? Eligendi dicta nulla ad, earum blanditiis
          saepe vitae, cupiditate rem laboriosam similique dolorem sequi, neque
          deleniti facere voluptatibus ex veniam inventore reprehenderit. Vitae
          aut et exercitationem totam quae sunt reiciendis a culpa maxime sit
          tenetur reprehenderit, architecto quidem omnis pariatur aliquid.
          Delectus, sequi aliquam. Sed, nobis, debitis architecto exercitationem
          aut adipisci a sunt placeat illo mollitia aperiam atque quisquam error
          consectetur harum eius nulla! Cumque, doloremque esse temporibus odit
          nam placeat vel, saepe aliquid velit suscipit beatae ullam totam
          magnam voluptatibus a reprehenderit illo labore excepturi corporis rem
          molestiae molestias quaerat omnis distinctio. Numquam error natus,
          dicta quasi dolorem quis quam mollitia ipsam cum nulla perferendis?
          Voluptatum ipsa adipisci illum eum odit dolorum tenetur quod alias
          numquam magnam et corporis nobis sapiente porro ullam vitae velit
          similique, sint pariatur. Doloremque vero, veniam commodi possimus
          quos ducimus non. Rem dolores delectus eos est tenetur aliquam
          reiciendis cumque similique amet. A repellendus voluptates
          exercitationem debitis deleniti in sequi!"
        />
      </div>
    </Layout>
  );
}
