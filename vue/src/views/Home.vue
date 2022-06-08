<script setup>
import { ref } from "vue";
import { directus } from "@/services/directus";
import { formatRelativeTime } from "../../../shared/utils/format-relative-time";
import Hero from "@/components/Hero.vue";
import Article from "@/components/Article.vue";

const hero = ref(null);
const articles = ref(null);

fetchData();

async function fetchData() {
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

  const [first, ...rest] = formattedArticles;
  hero.value = first;
  articles.value = rest;
}
</script>

<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero v-if="hero" :article="hero" />
        <div v-if="articles" class="articles-grid">
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
