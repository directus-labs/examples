<template>
  <article class="hero">
    <div class="hero__topWrapper">
      <div class="hero__imageWrapper">
        <img
          :src="$assetURL(article.cover_image)"
          alt=""
          loading="lazy"
        />
      </div>
      <span aria-hidden="true" class="tag">Writing</span>
    </div>
    <h1 class="hero__title">
      <nuxt-link :to="`/articles/${article.id}`">
        {{ article.title }}
      </nuxt-link>
    </h1>
    <p class="hero__excerpt">{{ article.excerpt }}</p>
    <div class="hero__detail">
      <div class="hero__detailAuthorImage">
        <img
          :src="$assetURL(article.author.avatar)"
          alt=""
          loading="lazy"
        />
      </div>
      <div>
        <div class="hero__detailAuthorName">
          {{ `${article.author.first_name} ${article.author.last_name}` }}
        </div>
        <div>{{ article.publish_date }}</div>
        <div class="hero__detailCategory">Writing</div>
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
