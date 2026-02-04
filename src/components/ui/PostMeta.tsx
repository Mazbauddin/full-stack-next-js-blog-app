import { ArticleMeta } from "@/types/article";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const PostMeta = ({
  author,
  authorHref,
  category,
  categoryHref,
  date,
  readingTime,
}: ArticleMeta) => {
  return (
    <div className="text-sm text-gray-500 flex items-center flex-wrap">
      <Link
        href={authorHref}
        className="text-gray-600 hover:text-primary transition-colors"
      >
        {author}
      </Link>
      <span className="mx-1">in</span>
      <Link
        href={categoryHref}
        className="text-gray-600 hover:text-primary transition-colors capitalize"
      >
        {category}
      </Link>
      <span className="mx-1">&bull;</span>
      <span className="">{date}</span>
      <span className="mx-1">&bull;</span>
      <span className="">{readingTime}</span>
      <span className="ml-2 text-gray-300">
        <FaStar />
      </span>
    </div>
  );
};

export default PostMeta;
