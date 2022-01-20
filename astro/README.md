# Directus Astro Example

This is an [Astro](https://astro.build/) project bootstrapped with [`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro).

## 📌 Prerequisites

- A new Directus instance ([Installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd astro
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
   npm run dev
   ```

   Your Directus Astro example is now running at <http://localhost:3000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io/)
- [Documentation](https://docs.directus.io/)

### Astro

- [Official Site](https://astro.build)
- [Documentation](https://docs.astro.build)
