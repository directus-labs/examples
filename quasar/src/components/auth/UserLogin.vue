<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth'
import { ref } from 'vue';

const auth = useAuthStore();
const email = ref<string>('');
const password = ref<string>('');
const login = () => {
  const credentials: { email: string; password: string } = {
    email: email.value,
    password: password.value,
  };
  auth.login(credentials);
};
</script>

<template>
  <div>
    <q-form @submit.prevent="login" autofocus class="q-gutter-md">
      <q-input autofocus required outlined type="email" name="email" v-model="email" label="Email"
        hint="Registered Email" />

      <q-input outlined required name="password" type="password" v-model="password" label="Password" />

      <div>
        <q-btn unelevated label="Login" type="submit" color="primary" />
        <!-- <q-btn
          label="Forget"
          type="submit"
          color="primary"
          flat
          class="q-ml-sm"
        /> -->
      </div>
    </q-form>
  </div>
</template>
