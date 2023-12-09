/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
export async function load({fetch,params}) {
	const directus = getDirectusInstance(fetch);
	try {
		return {
			page: await directus.readItem('pages', params.slug)
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}