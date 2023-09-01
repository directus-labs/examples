<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="post in posts">
      <NuxtLink :href="`/blog/${post.slug}`">
        <h2>{{post.title}}</h2>
      </NuxtLink>
      <span>{{post.publish_date}} &bull; {{post.author.name}}</span>
    </li>
  </ul>
</template>


<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: posts } = await useAsyncData('posts', () => {
  return $directus.request(
    $readItems('posts', {
      fields: ['slug', 'title', 'publish_date', { 'author': [ 'name' ] }],
      sort: ['-publish_date']
    })
  )
})
</script>
