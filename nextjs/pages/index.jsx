import Head from "next/head";
import Image from "next/legacy/image";
import Hero from "../components/Hero";
import Article from "../components/Article";
import { getDirectusClient } from "../lib/directus";
import { formatRelativeTime } from "../utils/format-relative-time";

export default function Home({ hero, articles }) {
  return (
    <main>
      <section className="main-content">
        <div className="container">
          <Hero article={hero} />
          <div className="articles-grid">
            {articles.map((article, index) => (
              <Article
                key={index}
                article={article}
                bordered={index !== articles.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const directus = await getDirectusClient();
  const response = await directus.items("articles").readByQuery({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    sort: "-publish_date",
  });
  const formattedArticles = response.data.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };
  });
  const [hero, ...articles] = formattedArticles;

  return {
    props: {
      hero,
      articles,
    },
  };
}
