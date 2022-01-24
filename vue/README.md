# Directus Vue Example

This is a [Vue 3](https://v3.vuejs.org) project bootstrapped with [`create-vue`](https://github.com/vuejs/create-vue).

## 📌 Prerequisites

- A new Directus instance ([Installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd vue
   npm install
   ```

3. Create a `.env` file based on the provided `.env.example` file. You can use either the credentials (email & password) or static token of the admin account.

4. Apply the provided `example.yaml` schema onto your Directus instance. [Learn more here](https://docs.directus.io/reference/cli/#applying-a-snapshot)

5. Insert seed data to your Directus instance.

   > ⚠ If you had inserted seed via other project examples, make sure that the Public role has been granted **full read permission** to both `articles` & `directus_users` for this example to work properly.

   ```shell
   npm run seed
   ```

6. Start the development server.

   ```shell
   npm run dev
   ```

   Your Directus Vue example is now running at <http://localhost:3000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io/)
- [Documentation](https://docs.directus.io/)

### Vue

- [Official Site](https://v3.vuejs.org)
- [Documentation](https://v3.vuejs.org/guide/introduction.html)
