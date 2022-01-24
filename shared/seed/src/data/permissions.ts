import { directus } from "../directus";
import { logger } from "../logger";
import { getArgv } from "../utils/get-argv";

const basePermissions = [
  {
    role: null,
    collection: "directus_files",
    action: "read",
    fields: "*",
  },
];

// SPA examples require read permission to Public role
const spaPermissions = [
  {
    role: null,
    collection: "articles",
    action: "read",
    fields: "*",
  },
  {
    role: null,
    collection: "directus_users",
    action: "read",
    fields: "*",
  },
];

export async function seedPermissions() {
  logger.info("Seeding permissions...");

  let permissionsData = basePermissions;

  const argv = getArgv();
  const spaProjects = ["Vue"];
  if (argv.project && spaProjects.includes(argv.project)) {
    permissionsData = permissionsData.concat(spaPermissions);
  }

  await directus.permissions.createMany(permissionsData);

  logger.info("Seeding permissions completed.");
}
