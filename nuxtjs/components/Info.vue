<template>
  <section class="relative px-4 mt-auto">
    <div class="absolute inset-0 hidden sm:flex">
      <div class="flex-1 bg-background-accent"></div>
      <div class="flex-1 bg-background-subdued"></div>
    </div>
    <div
      class="relative flex flex-col max-w-6xl mx-auto mb-4 space-y-4 sm:flex-row sm:mb-0 sm:space-y-0"
    >
      <div
        class="flex justify-center px-4 py-20 sm:justify-start sm:px-8 sm:flex-1 sm:py-28 bg-background-accent"
      >
        <div class="flex flex-col items-center">
          <span class="mb-2 opacity-50 text-foreground-accent"
            >Documentation</span
          >
          <a href="#" class="font-serif text-3xl text-center sm:text-5xl">
            Read the Tutorial
          </a>
        </div>
      </div>
      <div
        class="flex justify-center px-4 py-20 sm:justify-end sm:px-8 sm:flex-1 sm:py-28 bg-background-subdued"
      >
        <div class="flex flex-col items-center">
          <span class="mb-2 opacity-50 text-foreground-accent">Codebase</span>
          <a href="#" class="font-serif text-3xl text-center sm:text-5xl">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
