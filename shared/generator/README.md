# Directus Examples Database Generator

This project contains the seed data used by every examples in tandem with the provided `example.yaml` schema file. It uses `@directus/sdk` under the hood to perform the seed process and create a sqlite database file.

## ✨ Included Seeds

- Project settings with title based on example ran, including a simple background image.
- One new user as the author of all the seeded articles.
- Nine articles to be fetched in the examples.
- ❗ Sets **Read** permission to public role for `directus_files` in order to view the images without access tokens.
  
## Project Structure

- `example.yaml`: Contains the example schema.
- `src/assets`: Contains static files including article images, background and user avatar.
- `src/seed`: Seed data & logic.

## 🏗 Local build steps

1. Install the dependencies in this repo.

    ```shell
    npm install
    ```

2. Run the following command to generate fresh example sqlite database with seeded data:

    > **Warning**
    >
    > Running this command will delete and recreate any existing `config.json`, `data.db` and `./uploads/*` files.

    ```shell
    npm run generate
    ```

3. When updating the example in `/directus`, make sure to replace the `data.db` and `uploads` folder with the newly generated ones here.

## 💻 Trying out the generated database locally

To test the newly generated sqlite database locally, you can run the following command:

```shell
npm run local
```

The local demo will run at `http://localhost:8055`. Refer to the `ADMIN_EMAIL` and `ADMIN_PASSWORD` variables in `config.json` for the admin credentials.
