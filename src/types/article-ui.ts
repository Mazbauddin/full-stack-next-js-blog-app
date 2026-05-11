export type ArticleUI = {
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
