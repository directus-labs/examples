import "dotenv/config";
import pupa from "pupa";
import { env } from "./env";
import { logger } from "./logger";
import { directus } from "./directus";
import { seedProject, seedUsers, seedArticles, seedPermissions, seedPresets } from "./data";
import { getArgv } from "./utils/get-argv";

export async function start() {
  const argv = getArgv();

  logger.info(
    pupa("Seeding data for Directus {project} example...", {
      project: argv.project,
    })
  );

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

  await seedProject();
  const user = await seedUsers();
  await seedArticles(user);
  await seedPermissions();
  await seedPresets();

  logger.info("Logging out...");
  await directus.auth.logout();

  logger.success(
    pupa("Directus {project} example seeding completed.", {
      project: argv.project,
    })
  );
}

start().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
