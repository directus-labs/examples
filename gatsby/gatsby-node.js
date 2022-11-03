const path = require(`path`);
const {
  formatRelativeTime,
} = require("./src/utils/format-relative-time.cjs");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      query {
        directus {
          articles(filter: { status: { _eq: "published" } }, limit: -1) {
            id
            title
            excerpt
            body
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
    `
  );

  for (const article of data.directus.articles) {
    const formattedArticle = {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };

    const moreArticlesResponse = await graphql(
      `
      query {
        directus {
          articles(filter: { _and: [{ id: { _neq: ${article.id} } }, { status: { _eq: "published" } }] }, limit: 2) {
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
    `
    );

    const formattedMoreArticles =
      moreArticlesResponse.data.directus.articles.map(
        (formattedMoreArticle) => {
          return {
            ...formattedMoreArticle,
            publish_date: formatRelativeTime(
              new Date(formattedMoreArticle.publish_date)
            ),
          };
        }
      );

    actions.createPage({
      path: `/articles/${article.id}`,
      component: path.resolve(`src/templates/article.jsx`),
      context: {
        article: formattedArticle,
        moreArticles: formattedMoreArticles,
      },
    });
  }
};
