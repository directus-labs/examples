<template>
  <article
    class="pb-8 mb-4 space-y-4 border-b sm:mb-8 group"
  >
    <div class="relative">
      <div class="overflow-hidden aspect-w-16 aspect-h-8 bg-background-accent">
        <img
          :src="`http://localhost:8055/assets/${post.cover_image}`"
          alt=""
          loading="lazy"
          class="object-cover object-center"
        />
      </div>
      <span
        aria-hidden="trur"
        class="absolute px-3 py-2 text-sm font-semibold shadow-md top-4 left-4 bg-foreground-inverted"
        >Writing</span
      >
    </div>
    <nuxt-link :to="`/posts/${post.id}`" class="block">
      <h1 class="font-serif text-4xl sm:text-6xl">
        {{ post.title }}
      </h1>
    </nuxt-link>
    <p class="hidden sm:inline-block sm:w-3/5">{{ post.excerpt }}</p>
    <div class="flex items-center flex-shrink-0">
      <div
        class="relative flex-shrink-0 mr-4 overflow-hidden rounded-full w-14 h-14 bg-background-accent"
      >
        <img
          :src="`http://localhost:8055/assets/${post.author.avatar}`"
          alt=""
          loading="lazy"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="text-foreground-subdued">
        <div class="font-semibold text-foreground-accent">
          {{ `${post.author.first_name} ${post.author.last_name}` }}
        </div>
        <div>3 hours ago</div>
        <div class="hidden">Writing</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
