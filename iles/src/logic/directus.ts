import { Directus } from '@directus/sdk'
export type { QueryMany } from '@directus/sdk'

export async function useDirectus () {
  const directus = new Directus(import.meta.env.VITE_DIRECTUS_URL)

  if (!directus.auth.token)
    await authenticate(directus)

  return directus
}

async function authenticate (directus: Directus<any>) {
  if (import.meta.env.VITE_DIRECTUS_EMAIL && import.meta.env.VITE_DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: import.meta.env.VITE_DIRECTUS_EMAIL,
      password: import.meta.env.VITE_DIRECTUS_PASSWORD,
    })
  } else if (import.meta.env.VITE_DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(import.meta.env.VITE_DIRECTUS_STATIC_TOKEN)
  }
}
