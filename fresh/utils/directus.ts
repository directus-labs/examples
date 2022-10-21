/*
    GraphQL interface to talk to Directus.
*/

import { DIRECTUS_URL, DIRECTUS_STATIC_TOKEN } from "~/utils/env.ts";

export const directusFetch = async ({ query, variables }) => {
    const result = await fetch(DIRECTUS_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer: ${DIRECTUS_STATIC_TOKEN}`,
        },
        body: JSON.stringify({ query, variables }),
    }).then((res) => res.json());

    if (!result || !result.data) {
        console.error(result);
        return [];
    }

    return result.data;
};

export function getAssetURL(id) {
    if (!id) return null;
    return `${DIRECTUS_URL}/assets/${id}`;
}