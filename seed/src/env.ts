import { logger } from "./logger";
import { getArgv } from "./utils/get-argv";

const argv = getArgv();

if (argv.project === "Gatsby") {
  if (!process.env.GATSBY_DIRECTUS_URL) {
    logger.error(`GATSBY_DIRECTUS_URL environment variable is missing.`);
    process.exit(1);
  }
} else {
  if (!process.env.DIRECTUS_URL) {
    logger.error(`DIRECTUS_URL environment variable is missing.`);
    process.exit(1);
  }
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
  url:
    argv.project === "Gatsby"
      ? process.env.GATSBY_DIRECTUS_URL
      : process.env.DIRECTUS_URL,
  email: process.env.DIRECTUS_EMAIL,
  password: process.env.DIRECTUS_PASSWORD,
  staticToken: process.env.DIRECTUS_STATIC_TOKEN,
};
