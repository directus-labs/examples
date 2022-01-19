import pupa from "pupa";
import { directus } from "../directus";
import { importFile } from "../utils/import-file";
import { getArgv } from "../utils/get-argv";
import { logger } from "../logger";

const backgroundPath = "./src/assets/background.jpg";

export async function seedProject() {
  logger.info("Seeding project settings...");
  const argv = getArgv();
  const backgroundFile = await importFile(backgroundPath);

  await directus.settings.update({
    project_name: pupa("Directus {project}", { project: argv.project }),
    public_background: backgroundFile.id,
    public_note: pupa("Directus {project} Example", { project: argv.project }),
  });

  logger.info("Seeding project settings completed.");
}
