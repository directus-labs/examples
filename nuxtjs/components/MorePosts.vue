<template>
  <section class="px-4 mb-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="pb-2 mb-4 font-serif text-4xl border-b sm:pb-4 sm:mb-8 sm:text-5xl">More Posts</h2>
      <div v-if="posts.length !== 0" class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2">
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
