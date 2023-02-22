import { Directus } from '@directus/sdk'
const directus = new Directus('https://CHANGE-THIS.directus.app/')

export default defineNuxtPlugin(() => {
  return {
    provide: { directus }
  }
})