import { Directus as DirectusType } from "@directus/sdk";
import importCwd from "import-cwd";
import { env } from "./env";

const { Directus }: { Directus: typeof DirectusType } = importCwd(
  "@directus/sdk"
) as any;

export const directus = new Directus(env.url);
