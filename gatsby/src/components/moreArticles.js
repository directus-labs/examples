import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Article from "./article";
import { formatRelativeTime } from "../utils/format-relative-time";

const renderMoreArticles = (data) => {
  const formattedArticles = data.directus.articles.map((article) => {
    return {
      ...article,
      date_created: formatRelativeTime(new Date(article.date_created)),
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
};

const MoreArticles = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          directus {
            articles(limit: 2) {
              id
              title
              date_created
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
      `}
      render={(data) => renderMoreArticles(data)}
    />
  );
};

export default MoreArticles;
