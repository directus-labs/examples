/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
export async function load({fetch}) {
	const directus = getDirectusInstance(fetch);
    return {
		global: await directus.readItems('global')
	};
}