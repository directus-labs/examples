<template>
  <h1>{{page.title}}</h1>
  <div v-html="page.content"></div>
</template>

<script setup>
  const { $directus, $readItem } = useNuxtApp()
  const route = useRoute()

  const { data: page } = await useAsyncData('page', () => {
    return $directus.request($readItem('pages', route.params.slug))
  })

  if (!page.value) throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
</script>
