# Nuxt.js

## Prerequisites

1. A Directus instance (link to Directus setup guide)
2. Node.js
3. Database

## Getting started

1. Create a Directus instance by running:

    ```
    npm init directus-project directus-demo
    ```

2. Apply the provided schema snapshot, `demo.yaml` by running:

    ```
    npx directus schema apply ./demo.yaml
    ```
    > Learn more about schema snapshot/apply [over here](https://docs.directus.io/reference/command-line-interface/#migrate-schema-to-a-different-environment)

3. Move the provided custom migration file, `20211014-add-demo-data.js` into the `extensions/migrations` directory in our Directus project:

    ```
    .
    ├── extensions
    │   └── migrations
    │       └── 20211014-add-demo-data.js <- place the file here
    └── package.json
    ```

    We should see the following output in the terminal:

    ```
    ✨ Running migrations...
    ✨ Applying Add Demo Data...
    ✨ Done
    ```

4. Apply the custom migration by running:  
    ```
    npx directus database migrate:*
    ```
    > Learn more about custom migrations [over here](https://docs.directus.io/guides/migrations/#custom-migrations)

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
