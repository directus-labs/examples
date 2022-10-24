/*
    GraphQL interface to talk to Directus.
*/

import { DIRECTUS_URL, DIRECTUS_STATIC_TOKEN } from "~/utils/env.ts";

export const directusFetch = async ({ query, variables }) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${DIRECTUS_STATIC_TOKEN}`);
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
        query: query,
        variables: {}
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };

    const result = await fetch(`${DIRECTUS_URL}/graphql`, {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
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