<template>
  <article class="flex pb-4 sm:pb-0 sm:flex-col" :class="{ 'border-b sm:border-b-0': bordered }">
    <div class="relative w-1/3 mr-4 sm:mr-0 sm:w-auto">
      <div
        class="h-full overflow-hidden sm:h-auto sm:aspect-w-16 sm:aspect-h-9 bg-background-accent"
      >
        <img
          :src="`http://localhost:8055/assets/${post.cover_image}`"
          alt=""
          loading="lazy"
          class="object-cover object-center w-full h-full sm:w-auto sm:h-auto"
        />
      </div>
      <span
        aria-hidden="true"
        class="absolute hidden px-3 py-2 text-sm font-semibold shadow-md sm:block top-4 left-4 bg-foreground-inverted"
        >Writing</span
      >
    </div>
    <div class="w-2/3 py-4 space-y-4 sm:w-auto">
      <nuxt-link :to="`/posts/${post.id}`">
        <h1 class="font-serif text-2xl sm:text-4xl">
          {{ post.title }}
        </h1>
      </nuxt-link>
      <div class="flex items-center">
        <div
          class="relative hidden mr-4 overflow-hidden rounded-full sm:block w-14 h-14 bg-background-accent"
        >
          <img
            :src="`http://localhost:8055/assets/${post.author.avatar}`"
            alt=""
            loading="lazy"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div
          class="flex space-x-4 sm:flex-col sm:space-x-0 text-foreground-subdued"
        >
          <div class="font-semibold sm:text-foreground-accent">
            {{ `${post.author.first_name} ${post.author.last_name}` }}
          </div>
          <div>3 hours ago</div>
          <div class="sm:hidden">Writing</div>
        </div>
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
    },
    bordered: {
      type: Boolean,
      required: true
    }
  }
};
</script>
