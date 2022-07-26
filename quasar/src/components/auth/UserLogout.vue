
<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth';

const auth = useAuthStore();

</script>
<template>
  <div>
    <q-btn icon="lock" class="bg-red text-white" label="Logout" flat @click="auth.logout()" />
  </div>
</template>
