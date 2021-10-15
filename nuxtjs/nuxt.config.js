export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
