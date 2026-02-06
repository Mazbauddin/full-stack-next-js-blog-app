"use client";
import { IArticle } from "@/models/Article";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ArticleList = ({ initialArticles }: { initialArticles: IArticle[] }) => {
  const [articles, setArticles] = useState(initialArticles);

  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="grid md:grid-cols-4 gap-10">
      {articles.map((article: IArticle, index: number) => (
        <Link
          key={index}
          href={`/articles/${article._id}`}
          className="block h-80"
        >
          <div className="group bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden">
            {article.image && (
              <div className="relative aspect-video w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{article.meta?.category}</span>
                <span>•</span>
                <span>{article.meta?.date}</span>
              </div>

              <h2 className="text-base line-clamp-2 font-semibold text-gray-900 group-hover:text-primary">
                {article.title}
              </h2>

              <div className="mt-4 text-sm text-gray-500">
                By <span className="font-medium">{article.meta?.author}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
