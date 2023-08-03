import { component$ } from '@builder.io/qwik';
import Article from "./Article";

interface MoreArticlesProps {
  articles: object[]
}

export default component$<MoreArticlesProps>(({ articles }) => {
  return (
    <section class="more-articles">
      <div class="container">
        <h1 class="more-articles__title">More Articles</h1>
        {articles.value?.length > 0 && (
          <div class="articles-grid">
            {articles.value.map((article, index) => (
              <Article
                key={index}
                article={article}
                bordered={index !== articles.value.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});
