import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '$lib/format-relative-time';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load() {
	const directus = await getDirectusClient();

	let response;
	try {
		response = await directus.items('articles').readByQuery({
			fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
			sort: '-publish_date'
		});
	} catch (err) {
		throw error(400, 'not found');
	}

	const formattedArticles = response.data.map((article) => {
		return {
			...article,
			publish_date: formatRelativeTime(new Date(article.publish_date))
		};
	});

	if (!formattedArticles) {
		throw error(400, 'not found');
	}

	const [hero, ...articles] = formattedArticles;

	return {
		hero,
		articles
	};
}
