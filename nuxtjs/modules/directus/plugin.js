import { Directus } from '@directus/sdk'

const directusPlugin = async (context, inject) => {
  const { url, auth } = <%= JSON.stringify(options, null, 2) %>

  const directus = new Directus(url)

  if (auth.email && auth.password) {
    await directus.auth.login({ email: auth.email, password: auth.password })
  } else if (auth.token) {
    await directus.auth.static(auth.token)
  }

  inject('directus', directus)
}

export default directusPlugin
