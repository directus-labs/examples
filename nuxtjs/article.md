# How to integrate Directus with Nuxt.js

🚧 _Article under construction_

## Adding Directus module to your Nuxt project

> If you don't have a Nuxt project ready yet, check out the official docs on setting up and running a Nuxt project: https://nuxtjs.org/docs/get-started/installation/

The Directus module exposes the Directus SDK in the [Nuxt Context](https://nuxtjs.org/docs/internals-glossary/context/) so that we may access it via `$directus` (`asyncData`, `middleware`,`plugins`) or `this.$directus` in Nuxt `fetch()` methods.

1. Install the `@directus/nuxt` module by running:

    ```
    npm install @directus/nuxt
    ```

2. Add it into the `modules` section in our `nuxt.config.js` file:

    ```js
    export default {
      modules: ['@directus/nuxt']
    }
    ```

3. Configure our Directus module in our `nuxt.config.js` with the following:

    - `url`: The URL of your Directus instance

    For authentication, you can either use credentials:

    - `options.email`: user email
    - `options.password`: user password

    Or a static token:

    - `options.static`: the static token

    > How to get a static token? Check out: https://docs.directus.io/reference/api/authentication/#static-token

    Here's an example of how it would look like:

    ```js
    export default {
      modules: ['@directus/nuxt'],
      directus: {
        url: 'http://localhost:8055',
        options: {
          static: 'superadminsecrettoken',
          // email: 'superadmin@example.com',
          // password: 'password',
        }
      }
    }
    ```

    (may have to modify this to use [privateRuntimeConfig](https://nuxtjs.org/docs/directory-structure/nuxt-config#privateruntimeconfig))

## Creating the main page

Here we will display a list of posts available in our `Posts` collection in Directus.

Since the author detail is a nested relationship of `Posts`, we can retrieve the nested author properties by specifying `author.<nested property here>` under `fields` within our query:

```js
fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
```

and we will show the posts in descending order. We can use the `sort` option in our query:

```js
sort: '-date_created'
```

Note that there is a minus sign prepend to the `date_created` column to indicate the result should be in descending order.
