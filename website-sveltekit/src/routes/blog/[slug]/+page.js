/** @type {import('./$types').PageLoad} */
import { error } from "@sveltejs/kit";
import getDirectusInstance from "$lib/directus";
export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);
  try {
    return {
      post: await directus.readItem("posts", params.slug, {
        fields: ["*", { "*": ["*"] }],
      }),
    };
  } catch (err) {
    throw error(404, "Post not found");
  }
}
