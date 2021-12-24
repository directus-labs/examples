import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Article from "../components/article";
import { formatRelativeTime } from "../utils/format-relative-time";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const formattedArticles = data.directus.articles.map((article) => {
    return {
      ...article,
      date_created: formatRelativeTime(new Date(article.date_created)),
    };
  });
  const [hero, ...articles] = formattedArticles;

  return (
    <Layout>
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
    </Layout>
  );
};

export const query = graphql`
  query {
    directus {
      articles(sort: "date_created") {
        id
        title
        excerpt
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
`;

export default IndexPage;
