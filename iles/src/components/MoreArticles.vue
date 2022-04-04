<script setup lang="ts">
import { useArticles, Article as ArticleType } from '~/logic/article'

const { for: article } = defineProps<{ for: ArticleType }>()

const articles = await useArticles({
  filter: {
    _and: [{ id: { _neq: article.id } }, { status: { _eq: "published" } }],
  },
  limit: 2,
})
</script>

<template>
  <section class="more-articles">
    <div class="container">
      <h1 class="more-articles__title">More Articles</h1>
      <div v-if="articles.length !== 0" class="articles-grid">
        <Article
          v-for="(article, index) in articles"
          :key="article.id"
          :article="article"
          :bordered="index !== articles.length - 1"
        />
      </div>
    </div>
  </section>
</template>
