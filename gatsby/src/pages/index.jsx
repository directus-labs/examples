import React from "react";
import DefaultLayout from "../layouts/Default";
import Hero from "../components/Hero";
import Article from "../components/Article";
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
