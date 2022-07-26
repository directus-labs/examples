<template>
  <q-page class="flex flex-center" padding>
    <q-card flat>
      <q-card-section>
        <div class="text-overline text-orange-9">Login to</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Directus</div>
        <div class="text-caption text-grey">
          This is a example of a login page.
        </div>
      </q-card-section>
      <UserLogin></UserLogin>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserLogin from 'src/components/auth/UserLogin.vue';
import { useAuthStore } from 'src/stores/auth'

const auth = useAuthStore();

export default defineComponent({
  name: 'AuthPage',
  components: { UserLogin },

  beforeRouteEnter(to, from, next) {
    if (auth.isAuthenticated) {
      next({ name: 'ProfilePage' });
    } else {
      next();
    }
  },

});
</script>
