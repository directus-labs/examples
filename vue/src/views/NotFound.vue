<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="error">
    <section>
      <div class="container">
        <h1>Uh-oh, we can't seem to find the page you're looking for.</h1>
        <p>
          <RouterLink to="/">Click here</RouterLink> to head back to the safety
          of the homepage.
        </p>
      </div>
    </section>
  </main>
</template>
