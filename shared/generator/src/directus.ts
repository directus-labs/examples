import { Directus } from "@directus/sdk";
import { env } from "./env";

export const directus = new Directus(env.PUBLIC_URL, {
	// @ts-ignore "url" in transport should not be marked as required
	transport: { headers: { "User-Agent": "directus-demo" } },
});
