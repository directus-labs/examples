<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const url = `/index.json`;
		const response = await fetch(url);

		if (!response.ok) {
			return {
				status: 404
			};
		}

		const data = await response.json();

		return {
			props: {
				hero: data.hero,
				articles: data.articles
			}
		};
	}
</script>

<script>
	import Hero from '$lib/components/Hero.svelte';
	import Article from '$lib/components/Article.svelte';

	export let hero, articles;
</script>

<main>
	<section class="main-content">
		<div class="container">
			<Hero article={hero} />
			<div class="articles-grid">
				{#each articles as article, index}
					<Article {article} bordered={index !== articles.length - 1} />
				{/each}
			</div>
		</div>
	</section>
</main>
