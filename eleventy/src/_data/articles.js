const {
  formatRelativeTime,
} = require("../../../shared/utils/format-relative-time.cjs");

module.exports = async function ({ directus }) {
  let response = await directus.items("articles").readMany({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    filter: { status: { _eq: "published" } },
    limit: -1,
  });

  let articles = response.data;

  for (const [index, article] of Object.entries(articles)) {
    const moreArticlesResponse = await directus.items("articles").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      filter: {
        _and: [{ id: { _neq: article.id } }, { status: { _eq: "published" } }],
      },
      limit: 2,
    });

    const formattedMoreArticles = moreArticlesResponse.data.map(
      (formattedMoreArticle) => {
        return {
          ...formattedMoreArticle,
          publish_date: formatRelativeTime(
            new Date(formattedMoreArticle.publish_date)
          ),
        };
      }
    );

    articles[index] = {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
      moreArticles: formattedMoreArticles,
    };
  }

  return articles;
};
