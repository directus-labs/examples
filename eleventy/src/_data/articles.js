const UNITS = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const LOCALE = "en";

const rtf = new Intl.RelativeTimeFormat(LOCALE, { numeric: "auto" });

function formatRelativeTime(fromDate, toDate) {
  const elapsed = fromDate - (toDate || new Date());

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (let u in UNITS) {
    if (Math.abs(elapsed) > UNITS[u] || u === "second")
      return rtf.format(Math.round(elapsed / UNITS[u]), u);
  }

  return fromDate.toLocaleDateString(LOCALE);
}

module.exports = async function ({ directus }) {
  let response = await directus.items("articles").readByQuery({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    filter: { status: { _eq: "published" } },
    limit: -1,
  });

  let articles = response.data;

  for (const [index, article] of Object.entries(articles)) {
    const moreArticlesResponse = await directus.items("articles").readByQuery({
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
