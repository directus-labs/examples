<script>
	import Article from '$lib/components/Article.svelte';
	export let articles;
</script>

<section class="more-articles">
	<div class="container">
		<h1 class="more-articles__title">More Articles</h1>
		<div class="articles-grid">
			{#each articles as article, index}
				<Article {article} bordered={index !== articles.length - 1} />
			{/each}
		</div>
	</div>
</section>
