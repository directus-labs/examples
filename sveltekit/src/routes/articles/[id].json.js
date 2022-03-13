import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '../../../../shared/utils/format-relative-time';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const { id } = params;

	const directus = await getDirectusClient();

	let article;
	try {
		 article = await directus.items('articles').readOne(id, {
			fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name']
		});
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
		return {
			status: 404
		};
	}

	const formattedArticle = {
		...article,
		publish_date: formatRelativeTime(new Date(article.publish_date))
	};

	const moreArticlesResponse = await directus.items('articles').readMany({
		fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
		filter: {
			_and: [{ id: { _neq: article.id } }, { status: { _eq: 'published' } }]
		},
		limit: 2
	});
	const formattedMoreArticles = moreArticlesResponse.data.map((moreArticle) => {
		return {
			...moreArticle,
			publish_date: formatRelativeTime(new Date(moreArticle.publish_date))
		};
	});

	return {
		body: { article: formattedArticle, moreArticles: formattedMoreArticles }
	};
}
