<script setup>
import Article from "@/components/Article.vue";

defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="more-articles">
    <div class="container">
      <h1 class="more-articles__title">More Articles</h1>
      <div v-if="articles.length !== 0" class="articles-grid">
        <Article
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
          :bordered="index !== articles.length - 1"
        />
      </div>
    </div>
  </section>
</template>
