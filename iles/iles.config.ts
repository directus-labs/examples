import { resolve } from 'path'
import { defineConfig } from 'iles'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // Example: define convenient aliases.
        '@utils': resolve(__dirname, '../shared/utils'),
        '@stylesheet': resolve(__dirname, '../shared/stylesheet'),
      },
    },
  },
})
