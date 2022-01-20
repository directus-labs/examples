import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '../../../shared/utils/format-relative-time';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const directus = await getDirectusClient();

	const response = await directus.items('articles').readMany({
		fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
		sort: '-publish_date'
	});
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
		body: {
			hero,
			articles
		}
	};
}
