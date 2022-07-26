<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-12 text-center text-xl">
      You are logged in with directus.
    </div>
    <user-logout></user-logout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserLogout from 'src/components/auth/UserLogout.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: { UserLogout }
});
</script>
