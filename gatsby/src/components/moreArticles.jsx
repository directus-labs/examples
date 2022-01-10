import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "./Article";
import { formatRelativeTime } from "../utils/format-relative-time";

export default function MoreArticles() {
  const data = useStaticQuery(graphql`
    query {
      directus {
        articles(limit: 2) {
          id
          title
          publish_date
          author {
            first_name
            last_name
            avatar {
              id
            }
          }
          cover_image {
            id
          }
        }
      }
    }
  `);

  const formattedArticles = data.directus.articles.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };
  });
  const articles = formattedArticles;

  return (
    <section className="more-articles">
      <div className="container">
        <h1 className="more-articles__title">More Articles</h1>
        {articles.length !== 0 && (
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
  );
}
