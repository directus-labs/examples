import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Article from "../components/Article";
import { directus } from "../services/directus";
import { formatRelativeTime } from "../../../shared/utils/format-relative-time";

export default function Home() {
  const [hero, setHero] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function fetchData() {
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

      const [first, ...rest] = formattedArticles;
      setHero(first);
      setArticles(rest);
    }
    fetchData();
  }, []);

  return (
    <main>
      <section className="main-content">
        <div className="container">
          {hero && <Hero article={hero} />}
          {articles && (
            <div className="articles-grid">
              {articles.map((article, index) => (
                <Article
                  key={index}
                  article={article}
                  bordered={index !== articles.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
