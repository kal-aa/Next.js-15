"use client";

import { useParams, useSearchParams } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  return (
    <html lang="en">
      <body>
        {children}

        <hr />
        <p>This is article: {params.articleId}</p>
        <p>Language: {lang}</p>
      </body>
    </html>
  );
};

export default Layout;
