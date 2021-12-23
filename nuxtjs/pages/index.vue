<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero :article="hero" />
        <div class="articles-grid">
          <Article
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
            :bordered="index !== articles.length - 1"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { formatRelativeTime } from "@/utils/format-relative-time";

export default {
  async asyncData({ $directus }) {
    const response = await $directus.items("articles").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      sort: "date_created"
    });
    const formattedArticles = response.data.map(article => {
      return {
        ...article,
        date_created: formatRelativeTime(new Date(article.date_created))
      };
    });
    const [hero, ...articles] = formattedArticles;
    return { hero, articles };
  }
};
</script>
