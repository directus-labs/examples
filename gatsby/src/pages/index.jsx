import React from "react";
import DefaultLayout from "../layouts/default";
import Hero from "../components/Hero";
import Article from "../components/Article";
import { formatRelativeTime } from "../../../shared/utils/format-relative-time";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const formattedArticles = data.directus.articles.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };
  });
  const [hero, ...articles] = formattedArticles;

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
};

export const query = graphql`
  query {
    directus {
      articles(filter: { status: { _eq: "published" } }, sort: "publish_date") {
        id
        title
        excerpt
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
`;

export default IndexPage;
