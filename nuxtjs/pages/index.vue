<template>
  <main>
    <section class="main-content">
      <div class="container">
        <Hero :post="hero" />
        <div class="posts-grid">
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
