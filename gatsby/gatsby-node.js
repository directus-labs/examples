const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      query {
        directus {
          articles(filter: { status: { _eq: "published" } }, limit: -1) {
            id
          }
        }
      }
    `
  );

  data.directus.articles.forEach((article) => {
    actions.createPage({
      path: `/articles/${article.id}`,
      component: path.resolve(`src/templates/article.jsx`),
      context: {
        id: article.id,
      },
    });
  });
};
