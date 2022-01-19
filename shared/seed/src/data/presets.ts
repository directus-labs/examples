import pupa from "pupa";
import { directus } from "../directus";
import { getArgv } from "../utils/get-argv";
import { logger } from "../logger";

const presets = [
  {
    collection: "articles",
    layout: "tabular",
    layout_query: JSON.stringify({
      tabular: {
        fields: ["status", "cover_image", "title", "author", "publish_date"],
        sort: ["status"],
        page: 1,
      },
    }),
    layout_options: JSON.stringify({
      tabular: {
        widths: {
          status: 32,
          cover_image: 60,
          title: 505,
          publish_date: 180,
        },
      },
    }),
  },
];

export async function seedPresets() {
  logger.info("Seeding presets...");

  await directus.presets.createMany(presets);

  logger.info("Seeding presets completed.");
}
