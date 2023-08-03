import { Directus } from "@directus/sdk";
export const directus = new Directus(import.meta.env.PUBLIC_QWIK_APP_DIRECTUS_URL);
