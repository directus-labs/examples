import { Directus } from "@directus/sdk";

export const directus = new Directus(process.env.REACT_APP_DIRECTUS_URL);
