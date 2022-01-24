<script setup>
import { RouterLink } from "vue-router";
import { getAssetURL } from "@/utils/get-asset-url";

defineProps({
  article: {
    type: Object,
    required: true,
  },
  bordered: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <article class="article" :class="{ bordered }">
    <div class="article__topWrapper">
      <div class="article__imageWrapper">
        <img :src="getAssetURL(article.cover_image)" alt="" loading="lazy" />
      </div>
      <span aria-hidden="true" class="tag">Writing</span>
    </div>
    <div class="article__bottomWrapper">
      <h1 class="article__title">
        <RouterLink :to="`/articles/${article.id}`">
          {{ article.title }}
        </RouterLink>
      </h1>
      <div class="article__detail">
        <div class="article__detailAuthor">
          <img
            :src="getAssetURL(article.author.avatar)"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="article__detailInner">
          <div class="article__detailInnerAuthor">
            {{ `${article.author.first_name} ${article.author.last_name}` }}
          </div>
          <div class="article__detailInnerTime">{{ article.publish_date }}</div>
          <div class="article__detailInnerCategory">Writing</div>
        </div>
      </div>
    </div>
  </article>
</template>
