import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Hero from "~/components/Hero";
import Article from "~/components/Article";
import { getDirectusClient } from "~/lib/directus";
import { formatRelativeTime } from "../../../shared/utils/format-relative-time";

export const loader = async () => {
  const directus = await getDirectusClient();

  const response = await directus.items("articles").readMany({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    sort: "-publish_date",
  });
  const formattedArticles = response.data.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };
  });

  if (!formattedArticles) {
    throw new Response("Articles not found", {
      status: 404,
    });
  }

  const [hero, ...articles] = formattedArticles;

  return json({ hero, articles });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main>
      <section className="main-content">
        <div className="container">
          <Hero article={data.hero} />
          <div className="articles-grid">
            {data.articles.map((article, index) => (
              <Article
                key={index}
                article={article}
                bordered={index !== data.articles.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
