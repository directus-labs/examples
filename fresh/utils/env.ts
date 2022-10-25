// Load dotenv over Deno.env
import { config } from "$std/dotenv/mod.ts";
import { cleanEnv, str, url } from "envalid";

const RAW_ENV = Object.assign(Deno.env.toObject(), await config());

const ENV = cleanEnv(RAW_ENV, {
  BASE_URL: url(),
  DENO_ENV: str({ choices: ["development", "testing", "production"] }),
  DIRECTUS_URL: url(),
  DIRECTUS_STATIC_TOKEN: str(),
});

export const {
  BASE_URL,
  DENO_ENV,
  DIRECTUS_URL,
  DIRECTUS_STATIC_TOKEN,
} = ENV;

export default ENV;