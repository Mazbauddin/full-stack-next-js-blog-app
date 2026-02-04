import SectionTitle from "@/components/ui/SectionTitle";
import { IArticle } from "@/models/Article";
import ArticleCardPrimary from "./ArticleCardPrimary";
import Link from "next/link";
import ArticleCardSecondary from "./ArticleCardSecondary";

interface HomeContentSectionProps {
  editorPicksPrimary?: IArticle;
  editorPicksSecondary: IArticle[];
  trendingArticles: IArticle[];
}
const HomeContentSection = ({
  editorPicksPrimary,
  editorPicksSecondary,
  trendingArticles,
}: HomeContentSectionProps) => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Left Side */}
        <div className="w-full md:w-9/12 px-4 mb-10 md:mb-0">
          <SectionTitle title="Editor's Picks" />
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Main Feature Article */}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {editorPicksPrimary && (
                <ArticleCardPrimary article={editorPicksPrimary} />
              )}
              <Link
                href="/archive"
                className="inline-block mt-6 px-6 py-2.5 text-sm uppercase border rounded hover:bg-primary hover:text-white transition-colors"
              >
                All Featured
              </Link>
            </div>
            {/* Small Feature Article */}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {editorPicksSecondary &&
                editorPicksSecondary.map((article, index) => (
                  <ArticleCardSecondary key={index} article={article} />
                ))}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="">Trending</div>
      </div>
    </section>
  );
};

export default HomeContentSection;
