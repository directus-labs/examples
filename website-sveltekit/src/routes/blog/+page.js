/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
export async function load({fetch}) {
	const directus = getDirectusInstance(fetch);
	return {
		posts: await directus.readItems('posts', {
			fields: ['slug', 'title', 'publish_date', { 'author': [ 'name' ] }],
			sort: ['-publish_date']
		})
	};
}