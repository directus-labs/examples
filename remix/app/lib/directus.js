import { Directus } from "@directus/sdk";

const directus = new Directus(process.env.DIRECTUS_URL);

export async function getDirectusClient() {
  if (directus.auth.token) return directus;

  if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
    });
  } else if (process.env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN);
  }

  return directus;
}
