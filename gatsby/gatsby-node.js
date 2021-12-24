const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query {
        directus {
          articles(limit: -1) {
            id
            title
            excerpt
            body
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
    `
  );

  result.data.directus.articles.forEach((article) => {
    createPage({
      path: `/articles/${article.id}`,
      component: path.resolve(`src/templates/article.js`),
      context: {
        article,
      },
    });
  });
};
