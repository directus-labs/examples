import pupa from "pupa";
import { directus } from "../directus";
import { logger } from "../logger";

const permissionsData = [
  {
    role: null,
    collection: "directus_files",
    action: "read",
    fields: "*",
  },
];

export async function seedPermissions() {
  logger.info("Seeding permissions...");

  await directus.permissions.createMany(permissionsData);

  logger.info("Seeding permissions completed.");
}
