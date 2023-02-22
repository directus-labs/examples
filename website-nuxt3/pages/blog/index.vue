<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="post in posts.data">
      <NuxtLink :href="`/blog/${post.slug}`">
        <h2>{{post.title}}</h2>
      </NuxtLink>
      <span>{{post.publish_date}} &bull; {{post.author.name}}</span>
    </li>
  </ul>
</template>


<script setup>
  const { $directus } = useNuxtApp()
  const { data: posts } = await useAsyncData('posts', () => {
    return $directus.items('posts').readByQuery({
      fields: ['slug', 'title', 'publish_date', 'author.name'],
      sort: ['-publish_date']
    })
  })
</script>
