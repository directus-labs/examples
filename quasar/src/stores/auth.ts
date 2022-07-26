import { defineStore } from 'pinia';
import { directus } from 'src/boot/directus-sdk'; // See src/boot/directus-sdk.ts
import { Loading, Notify } from 'quasar'
import type { PartialItem, UserItem } from '@directus/sdk';
// import { UserInterface } from '~/types/UserInterface';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    me: <PartialItem<UserItem> | null>null,
    currentUser: null,
    token: directus.auth.token,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {

    // Refresh the token
    async refresh() {
      console.log(this)
      Loading.show();
      // Try to authenticate with token if exists
      await directus.auth
        .refresh()
        .then(async () => {
          await this.getMe();
          this.isAuthenticated = true;
          Loading.hide();
          Notify.create({
            type: 'positive',
            position: 'bottom',
            message: 'Login updated',
          });
        })
        .catch(() => {
          this.isAuthenticated = false;
          this.me = null;
          Loading.hide();
          Notify.create({
            type: 'negative',
            position: 'bottom',
            message: 'Login expired',
          });
        });
      Loading.hide();

    },
    // Get the current user
    async getMe() {
      Loading.show();
      await directus.users.me.read().then(async (me) => {
        this.me = me;
        // await this.getPermissions()
        Loading.hide();
      }).catch(() => {
        this.isAuthenticated = false;
        this.me = null;
        Loading.hide();
      })
      Loading.hide();

    },

    // Login
    async login({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): Promise<void> {
      Loading.show();
      if (!this.isAuthenticated) {
        await directus.auth
          .login({ email, password })
          .then(async () => {
            this.isAuthenticated = true;
            await this.getMe();
            Loading.hide();

            Notify.create({
              type: 'positive',
              position: 'bottom',
              message: 'Login successful',
            });
            this.router.replace('/');
          })
          .catch((error) => {
            Loading.hide();

            Notify.create({
              type: 'negative',
              position: 'bottom',
              message: error.message,
            });
          });
        Loading.hide();

      }
    },

    // Logout
    async logout() {
      Loading.show();
      await directus.auth.logout().then(() => {
        this.isAuthenticated = false;
        this.me = null;
        // this.ability.update([]);
        Loading.hide();
        Notify.create({
          type: 'warning',
          position: 'bottom',
          message: 'Logout successful',
        });

        this.router.replace('/auth');
      }).catch((err) => {
        Loading.hide();
        Notify.create({
          type: 'negative',
          position: 'bottom',
          message: 'Logout failed',
        });
        console.log(err.message)
      });
      Loading.hide();

    },
    // ----
  },
});
