<template>
  <section class="more-posts">
    <div class="container">
      <h1 class="more-posts-title">More Posts</h1>
      <div v-if="posts.length !== 0" class="posts-grid">
        <Post v-for="(post, index) in posts" :key="index" :post="post" :bordered="index !== posts.length - 1" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  async fetch() {
    const response = await this.$directus.items("posts").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      limit: 2,
    });
    this.posts = response.data;
  }
};
</script>
