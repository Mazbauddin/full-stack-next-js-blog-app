// "use client";

// import { IArticle } from "@/models/Article";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import SwiperCard from "./SwiperCard";

// interface FeaturedSliderSectionProps {
//   articles: IArticle[];
// }

// const FeaturedSliderSection = ({ articles }: FeaturedSliderSectionProps) => {
//   return (
//     <section className="mb-8 py-12 text-gray-800">
//       <div className="px-4 sm:px-6 lg:px-8">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           breakpoints={{
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 30,
//             },
//           }}
//           modules={[Pagination, Autoplay]}
//           className="rounded-xl"
//         >
//           {articles.map((article) => (
//             <SwiperSlide key={article._id.toString()}>
//               <SwiperCard article={article} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="border-t border-gray-200 mt-12 pt-8"></div>
//     </section>
//   );
// };

// export default FeaturedSliderSection;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArticleUI } from "@/types/article-ui";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCard from "./SwiperCard";

type Article = {
  _id: string;
  title: string;
  image: string;
  excerpt?: string;
  caption?: string;
  tags?: string[];

  meta: {
    category: string;
    date: string;
    author: string;
  };
};

interface FeaturedSliderSectionProps {
  articles: ArticleUI[];
}

const FeaturedSliderSection = ({ articles }: FeaturedSliderSectionProps) => {
  return (
    <section className="mb-8 py-12 text-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="rounded-xl"
        >
          {articles.map((article) => (
            <SwiperSlide key={article._id}>
              <SwiperCard
                article={{
                  _id: article._id,
                  title: article.title,
                  image: article.image,
                  excerpt: article.excerpt,
                  caption: article.caption,
                  tags: article.tags,

                  meta: {
                    category: article.meta?.category || "",
                    date: article.meta?.date || "",
                    author: article.meta?.author || "",

                    // REQUIRED by strict type
                    authorHref: "#",
                    categoryHref: "#",
                    readingTime: "3 min read",
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-8"></div>
    </section>
  );
};

export default FeaturedSliderSection;
