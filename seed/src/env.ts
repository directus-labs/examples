import { logger } from "./logger";

if (!process.env.DIRECTUS_URL) {
  logger.error(`DIRECTUS_URL environment variable is missing.`);
  process.exit(1);
}

if (
  !process.env.DIRECTUS_STATIC_TOKEN &&
  !process.env.DIRECTUS_EMAIL &&
  !process.env.DIRECTUS_PASSWORD
) {
  logger.error(
    `DIRECTUS_STATIC_TOKEN or DIRECTUS_EMAIL + DIRECTUS_PASSWORD environment variables are missing.`
  );
  process.exit(1);
}

export const env = {
  url: process.env.DIRECTUS_URL,
  email: process.env.DIRECTUS_EMAIL,
  password: process.env.DIRECTUS_PASSWORD,
  staticToken: process.env.DIRECTUS_STATIC_TOKEN,
};
