import { Directus } from '@directus/sdk'

const directusPlugin = async (context, inject) => {
  const { url, options } = <%= JSON.stringify(options, null, 2) %>

  const directus = new Directus(url)

  if (options.email && options.password) {
    await directus.auth.login({ email: options.email, password: options.password })
  } else if (options.staticToken) {
    await directus.auth.static(options.staticToken)
  }

  inject('directus', directus)
}

export default directusPlugin
