import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '$lib/format-relative-time';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const directus = await getDirectusClient();


	let response;
	try {
		response = await directus.items('articles').readByQuery({
			fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
			sort: '-publish_date'
		});
	} catch (err) {
		throw error(404, 'Not found');
	}



	const formattedArticles = response.data.map((article) => {
		return {
			...article,
			publish_date: formatRelativeTime(new Date(article.publish_date))
		};
	});

	if (!formattedArticles) {
		return {
			status: 404
		};
	}

	const [hero, ...articles] = formattedArticles;

	return {
		hero,
		articles
	};
}
