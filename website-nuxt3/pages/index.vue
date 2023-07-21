<template>
	<h1>{{global.title}}</h1>
	<p>{{global.description}}</p>
</template>

<script setup>
const { $directus, $readItems } = useNuxtApp()
const { data: global } = await useAsyncData('global', () => {
  return $directus.request($readItems('global'))
})
</script>
