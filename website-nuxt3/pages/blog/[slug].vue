<template>
  <img :src="`${$directus.url}/assets/${post.image.filename_disk}?width=600`" alt="">
  <h1>{{post.title}}</h1>
  <div v-html="post.content"></div>
</template>

<script setup>
  const { $directus } = useNuxtApp()
  const route = useRoute()
  const { data: post, error } = await useAsyncData('post', () => {
    return $directus.items('posts').readOne(route.params.slug, {
      fields: ['*.*']
    })
  })
  if (!post.value) throw createError({ 
    statusCode: 404, 
    statusMessage: 'Post Not Found' 
  })
</script>
