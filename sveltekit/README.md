# create-svelte

This is a [SvelteKit](https://kit.svelte.dev/) project bootstrapped with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## 📌 Prerequisites

- A new Directus instance ([Installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd sveltekit
   npm install
   ```

3. Create a `.env` file based on the provided `.env.example` file. You can use either the credentials (email & password) or static token of the admin account.

4. Apply the provided `example.yaml` schema onto your Directus instance. [Learn more here](https://docs.directus.io/reference/cli/#applying-a-snapshot)

5. Insert seed data to your Directus instance.

   ```shell
   npm run seed
   ```

6. Start the development server.

   ```shell
   npm run develop
   ```

   Your Directus SvelteKit example is now running at <http://localhost:8000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io/)
- [Documentation](https://docs.directus.io/)

### SvelteKit

- [Official Site](https://kit.svelte.dev/)
- [Documentation](https://kit.svelte.dev/docs)
