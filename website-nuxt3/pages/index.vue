<template>
  <h1>{{global.data.title}}</h1>
  <p>{{global.data.description}}</p>
</template>

<script setup>
  const { $directus } = useNuxtApp()
  const { data: global } = await useAsyncData('global', () => {
    return $directus.items('global').readByQuery()
  })
</script>
