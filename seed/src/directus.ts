import { env } from "./env";
import { Directus as DirectusType } from "@directus/sdk";
import importCwd from "import-cwd";

const { Directus }: { Directus: typeof DirectusType } = importCwd(
  "@directus/sdk"
) as any;

export const directus = new Directus(env.url);
