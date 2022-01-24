<script setup>
import { RouterView } from "vue-router";
import Notice from "@/components/Notice.vue";
import Header from "@/components/Header.vue";
import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="layout">
    <Notice />
    <Header />
    <RouterView :key="$route.fullPath" />
    <Info />
    <Footer />
  </div>
</template>
