import getConfig from "next/config";
import { Directus } from "@directus/sdk";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const { url } = publicRuntimeConfig;
const { email, password, token } = serverRuntimeConfig;

const directus = new Directus(url);

export async function getDirectusClient() {
  if (email && password) {
    await directus.auth.login({ email, password });
  } else if (token) {
    await directus.auth.static(token);
  }

  return directus;
}
