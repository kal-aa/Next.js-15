import Link from "next/link";
import { use } from "react";

const Page = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <>
      <h1 className="heading">News Article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}/?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}/?lang=es`}>Spanish</Link>
        <br />
        <Link href={`/articles/${articleId}/?lang=fr`}>French</Link>
      </div>
    </>
  );
};

export default Page;
