<template>
  <article class="hero">
    <div class="top-wrapper">
      <div class="image-wrapper">
        <img
          :src="`http://localhost:8055/assets/${article.cover_image}`"
          alt=""
          loading="lazy"
        />
      </div>
      <span
        aria-hidden="true"
        class="tag"
        >Writing</span
      >
    </div>
    <h1>
      <nuxt-link :to="`/articles/${article.id}`">
        {{ article.title }}
      </nuxt-link>
    </h1>
    <p class="excerpt">{{ article.excerpt }}</p>
    <div class="detail">
      <div
        class="author-image-wrapper"
      >
        <img
          :src="`http://localhost:8055/assets/${article.author.avatar}`"
          alt=""
          loading="lazy"
        />
      </div>
      <div>
        <div class="author-name">
          {{ `${article.author.first_name} ${article.author.last_name}` }}
        </div>
        <div>3 hours ago</div>
        <div class="category">Writing</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>
