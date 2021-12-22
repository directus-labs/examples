import "dotenv/config";
import { env } from "./env";
import { logger } from "./logger";
import { directus } from "./directus";
import { getArgv } from "./utils";

export async function start() {
  logger.info("Seeding data for Directus example...");
  const argv = getArgv();

  try {
    if (env.staticToken) {
      logger.info("Using static token for authentication...");
      await directus.auth.static(env.staticToken);
    } else if (env.email && env.password) {
      logger.info("Using email & password for authentication...");
      await directus.auth.login({ email: env.email, password: env.password });
    } else {
      logger.error(
        "Unable to login. Please check the credentials & url environment variables."
      );
      process.exit(1);
    }
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
  
  const info = await directus.server.info();
  console.log(info);

  logger.info("Logging out...");
  await directus.auth.logout();
  
  logger.info("Seed completed.");
}

start();
