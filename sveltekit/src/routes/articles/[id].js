import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '$lib/format-relative-time';

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
		return {
			status: 404
		};
	}

	const formattedArticle = {
		...article,
		publish_date: formatRelativeTime(new Date(article.publish_date))
	};

	const moreArticlesResponse = await directus.items('articles').readByQuery({
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
