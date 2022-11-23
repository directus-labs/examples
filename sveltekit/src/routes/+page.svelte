<script>
	import Hero from '$lib/components/Hero.svelte';
	import Article from '$lib/components/Article.svelte';

	export let data;
</script>

<main>
	<section class="main-content">
		<div class="container">
			<Hero article={data.hero} />
			<div class="articles-grid">
				{#each data.articles as article, index}
					<Article {article} bordered={index !== data.articles.length - 1} />
				{/each}
			</div>
		</div>
	</section>
</main>
