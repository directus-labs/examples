import { Directus } from "@directus/sdk";

export const directus = new Directus(import.meta.env.VITE_DIRECTUS_URL);
