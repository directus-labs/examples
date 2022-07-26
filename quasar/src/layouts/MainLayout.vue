<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar + Directus App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Pages
        </q-item-label>

        <MainMenu v-for="page in mainMenuItems" :key="page.title" v-bind="page" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainMenu from 'components/MainMenu.vue';

const pages = [
  {
    title: 'Home',
    caption: 'Home page',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Profile',
    caption: 'Profile page',
    icon: 'circle',
    link: '/profile'
  },
  {
    title: 'Auth',
    caption: 'Authentication page',
    icon: 'lock',
    link: '/auth'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainMenu
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      mainMenuItems: pages,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
