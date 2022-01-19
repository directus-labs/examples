import Article from "./Article";
import { getDirectusClient } from "../lib/directus";
import { formatRelativeTime } from "../../shared/utils/format-relative-time";

export default function MoreArticles({ articles }) {
  return (
    <section className="more-articles">
      <div className="container">
        <h1 className="more-articles__title">More Articles</h1>
        {articles?.length !== 0 && (
          <div className="articles-grid">
            {articles?.map((article, index) => (
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
  );
}
