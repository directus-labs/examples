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
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }
    ],

  },

  css: [
    'modern-normalize',
    '~/stylesheet/main.css'
  ],

  components: true,

  publicRuntimeConfig: {
    assetUrl: process.env.DIRECTUS_URL
  },

  plugins: [
    '~/plugins/asset-url.js',
  ],

  modules: [
    '~/modules/directus'
  ],

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      // token: process.env.DIRECTUS_STATIC_TOKEN,
    },
  },
}
