# Seed for Directus Examples

This project contains the seed data & script used by every examples in tandem with the provided `example.yaml` schema file. It uses `@directus/sdk` under the hood to perform the seed process.

## ✨ Included Seeds

- Project settings with title based on example ran, including a simple background image.
- One new user as the author of all the seeded articles.
- Nine articles to be fetched in the examples.
- ❗ Sets **Read** permission to public role for `directus_files` in order to view the images without access tokens.

## 🔧 Development

1. Install dependencies.

   ```shell
   npm install
   ```

2. Update seed data or logic in `src` folder.

3. Build `index.js` file.

   ```shell
   npm run build
   ```

4. Commit & push updated `index.js` file, along with any other changes.

5. Run `npm run seed` from any of the other examples' directory to run the new seed script.

## Credits

### Assets

- background.jpg: <https://unsplash.com/photos/SRJkK4rtZvs> by Jan Valečka
- article-1.jpg: <https://unsplash.com/photos/HXOllTSwrpM> by Ant Rozetsky
- article-2.jpg: <https://unsplash.com/photos/wawEfYdpkag> by Austin Distel
- article-3.jpg: <https://unsplash.com/photos/60caCHdOqH0> by Austin Distel
- article-4.jpg: <https://unsplash.com/photos/p74ndnYWRY4> by Windows
- article-5.jpg: <https://unsplash.com/photos/opIZa6gWsFs> by Dan Gold
- article-6.jpg: <https://unsplash.com/photos/E7Tzh2TTS6c> by Smartworks Coworking
- article-7.jpg: <https://unsplash.com/photos/1RT4txDDAbM> by S O C I A L . C U T
- article-8.jpg: <https://unsplash.com/photos/YI_9SivVt_s> by Israel Andrade
- article-9.jpg: <https://unsplash.com/photos/4C22PfVlhdw> by CoWomen
