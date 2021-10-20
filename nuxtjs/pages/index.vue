<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero :article="hero" />
        <div class="posts-grid">
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
export default {
  async asyncData({ $directus }) {
    const response = await $directus.items("articles").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      sort: "date_created"
    });
    const [hero, ...articles] = response.data;
    return { hero, articles };
  }
};
</script>
