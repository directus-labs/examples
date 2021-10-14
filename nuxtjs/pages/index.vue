<template>
  <main>
    <section class="px-4 mb-24">
      <div class="max-w-6xl mx-auto">
        <Hero :post="hero" />
        <div class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2">
          <Post v-for="(post, index) in posts" :key="index" :post="post" :bordered="index !== posts.length - 1" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $directus }) {
    const response = await $directus.items("posts").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      sort: 'date_created'
    });
    const [hero, ...posts] = response.data;
    return { hero, posts };
  }
};
</script>
