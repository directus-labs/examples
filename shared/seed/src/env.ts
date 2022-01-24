import { logger } from "./logger";
import { getArgv } from "./utils/get-argv";

function verifyEnvironmentVariables(variableNames: string[]) {
  for (const variableName of variableNames) {
    if (variableName in process.env) continue;

    logger.error(`${variableName} environment variable is missing.`);
    process.exit(1);
  }
}

const argv = getArgv();

switch (argv.project) {
  case "Astro":
    verifyEnvironmentVariables(["PUBLIC_DIRECTUS_URL"]);
  case "Gatsby":
    verifyEnvironmentVariables(["GATSBY_DIRECTUS_URL"]);
    break;
  case "SvelteKit":
  case "Vue":
    verifyEnvironmentVariables(["VITE_DIRECTUS_URL"]);
    break;
  default:
    verifyEnvironmentVariables(["DIRECTUS_URL"]);
}

if (
  argv.project === "Astro" &&
  !process.env.PUBLIC_DIRECTUS_STATIC_TOKEN &&
  !process.env.PUBLIC_DIRECTUS_EMAIL &&
  !process.env.PUBLIC_DIRECTUS_PASSWORD
) {
  logger.error(
    `PUBLIC_DIRECTUS_STATIC_TOKEN or PUBLIC_DIRECTUS_EMAIL + PUBLIC_DIRECTUS_PASSWORD environment variables are missing.`
  );
  process.exit(1);
} else if (
  !process.env.DIRECTUS_STATIC_TOKEN &&
  !process.env.DIRECTUS_EMAIL &&
  !process.env.DIRECTUS_PASSWORD
) {
  logger.error(
    `DIRECTUS_STATIC_TOKEN or DIRECTUS_EMAIL + DIRECTUS_PASSWORD environment variables are missing.`
  );
  process.exit(1);
}

export const env =
  argv.project === "Astro"
    ? {
        url: process.env.PUBLIC_DIRECTUS_URL,
        email: process.env.PUBLIC_DIRECTUS_EMAIL,
        password: process.env.PUBLIC_DIRECTUS_PASSWORD,
        staticToken: process.env.PUBLIC_DIRECTUS_STATIC_TOKEN,
      }
    : {
        url:
          argv.project === "Gatsby"
            ? process.env.GATSBY_DIRECTUS_URL
            : argv.project === "SvelteKit"
            ? process.env.VITE_DIRECTUS_URL
            : process.env.DIRECTUS_URL,
        email: process.env.DIRECTUS_EMAIL,
        password: process.env.DIRECTUS_PASSWORD,
        staticToken: process.env.DIRECTUS_STATIC_TOKEN,
      };
