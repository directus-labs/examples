# Nuxt.js

- Official Site: <https://nuxtjs.org/>
- Official Docs: <https://nuxtjs.org/docs/get-started/>

**NOTE:** This is an example for Nuxt 2.

## 📌 Prerequisites

- A new Directus instance ([Directus installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Move the provided schema snapshot, `example.yaml` to the root of your Directus project

    ```
    .
    ├── example.yaml
    └── package.json
    ```

2. Apply the schema snapshot by running

    ```bash
    npx directus schema apply ./example.yaml
    ```
    > Learn more about schema snapshot/apply [over here](https://docs.directus.io/reference/command-line-interface/#migrate-schema-to-a-different-environment)

3. Create a `.env` file based on `.example.env`. You can use either the credentials (email & password) or static token of the admin account.

    Here's an example using static token:

    ```
    DIRECTUS_BASE_URL=http://localhost:8055
    DIRECTUS_STATIC_TOKEN=<static token here>
    ```

4. Add example data to your Directus instance by running

    ```bash
    node seed.js
    ```

    We should see the following output in the terminal:

    ```
    Seeding author...
    Seeding cover images...
    Seeding posts...
    Seeding completed.
    ```

## ⚙️ Trying out this Nuxt.js example

1. Install dependencies

    ```bash
    npm install
    ```

2. Start development with hot reload at localhost:3000

    ```bash
    npm run dev
    ```

3. Generate static site

    ```bash
    npm run generate
    ```

4. Serve static site

    ```bash
    npm run start
    ```
