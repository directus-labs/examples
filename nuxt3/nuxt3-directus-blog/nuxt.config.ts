import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "-",
	},
});
