# Directus Gatsby Example

💡 This is a [Gatsby 4](https://www.gatsbyjs.com/) project bootstrapped with [`create-gatsby`](https://github.com/gatsbyjs/gatsby/tree/master/packages/create-gatsby) and uses the official [@directus/gatsby-source-directus](https://github.com/directus/directus/tree/main/packages/gatsby-source-directus) plugin.

## 📌 Prerequisites

- A new Directus instance ([Installation guide](https://docs.directus.io/getting-started/installation/))

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd gatsby
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

   Your Directus Gatsby example is now running at <http://localhost:8000>.

## 🔗 Links

### Directus

- [Official Site](https://directus.io/)
- [Documentation](https://docs.directus.io/)

### Gatsby

- [Official Site](https://www.gatsbyjs.com/)
- [Documentation](https://www.gatsbyjs.com/docs)
