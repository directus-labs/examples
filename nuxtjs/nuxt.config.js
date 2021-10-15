export default {
  target: 'static',

  head: {
    title: 'Directus Nuxt.js Example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap' }],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }]
  },

  css: [
    '~/assets/css/fonts.css'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/directus'
  ],

  directus: {
    url: process.env.DIRECTUS_BASE_URL,
    options: {
      static: process.env.DIRECTUS_STATIC_TOKEN,
      // email: process.env.DIRECTUS_EMAIL,
      // password: process.env.DIRECTUS_PASSWORD,
    },
  },
}
