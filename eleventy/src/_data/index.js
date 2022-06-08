const {
  formatRelativeTime,
} = require("../../../shared/utils/format-relative-time.cjs");

module.exports = async function ({ directus }) {
  const response = await directus.items("articles").readByQuery({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    sort: "-publish_date",
  });
  const formattedArticles = response.data.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    };
  });
  const [hero, ...articles] = formattedArticles;
  return { hero, articles };
};
