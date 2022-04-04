<script setup lang="ts">
import { useArticles } from '~/logic/article'

const [hero, ...articles] = await useArticles({
  fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
  sort: '-publish_date',
})
</script>

<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero :article="hero" />
        <div class="articles-grid">
          <Article
            v-for="(article, index) in articles"
            :key="article.id"
            :article="article"
            :bordered="index !== articles.length - 1"
          />
        </div>
      </div>
    </section>
  </main>
</template>
