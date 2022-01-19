import { directus } from "../directus";
import { importFile } from "../utils/import-file";
import { logger } from "../logger";

const userAvatarPath = "./src/assets/ben-haynes.jpg";

export async function seedUsers() {
  logger.info("Seeding users...");

  const userAvatarFile = await importFile(userAvatarPath);

  const user = await directus.users.createOne({
    avatar: userAvatarFile.id,
    email: "ben@example.com",
    first_name: "Benjamin",
    last_name: "Haynes",
  });

  logger.info("Seeding users completed.");

  return user;
}
