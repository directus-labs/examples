# Directus Remix Example

This is a [Remix](https://remix.run/) project bootstrapped with [`create-remix`](https://github.com/remix-run/remix/tree/main/packages/create-remix).

## 📌 Prerequisites

- A new Directus instance ([Installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd remix
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

   # Run this if you are on Windows instead
   # This is currently a known bug and it is tracked here: https://github.com/remix-run/remix/issues/914
   npm run dev:windows
   ```

   Your Directus Remix example is now running at <http://localhost:3000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io/)
- [Documentation](https://docs.directus.io/)

### Remix

- [Official Site](https://remix.run/)
- [Documentation](https://remix.run/docs)
