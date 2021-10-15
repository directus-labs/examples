<template>
  <article class="post" :class="{ bordered }">
    <div class="top-wrapper">
      <div class="image-wrapper">
        <img
          :src="`http://localhost:8055/assets/${post.cover_image}`"
          alt=""
          loading="lazy"
        />
      </div>
      <span aria-hidden="true" class="tag">Writing</span>
    </div>
    <div class="bottom-wrapper">
      <h1>
        <nuxt-link :to="`/posts/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </h1>
      <div class="detail">
        <div class="author-image-wrapper">
          <img
            :src="`http://localhost:8055/assets/${post.author.avatar}`"
            alt=""
            loading="lazy"
          />
        </div>
        <div
          class="detail-inner"
        >
          <div class="author-name">
            {{ `${post.author.first_name} ${post.author.last_name}` }}
          </div>
          <div class="time">3 hours ago</div>
          <div class="category">Writing</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      required: true
    }
  }
};
</script>
