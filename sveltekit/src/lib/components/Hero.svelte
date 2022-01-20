<script>
	import { getAssetURL } from '$lib/get-asset-url';
	export let article;
</script>

<article class="hero">
	<div class="hero__topWrapper">
		<div class="hero__imageWrapper">
			<img src={getAssetURL(article.cover_image)} alt="" loading="lazy" />
		</div>
		<span aria-hidden="true" class="tag"> Writing </span>
	</div>
	<h1 class="hero__title">
		<a href={`/articles/${article.id}`}>{article.title}</a>
	</h1>
	<p class="hero__excerpt">{article.excerpt}</p>
	<div class="hero__detail">
		<div class="hero__detailAuthorImage">
			<img src={getAssetURL(article.author.avatar)} alt="" loading="lazy" />
		</div>
		<div>
			<div class="hero__detailAuthorName">
				{`${article.author.first_name} ${article.author.last_name}`}
			</div>
			<div>{article.publish_date}</div>
			<div class="hero__detailCategory">Writing</div>
		</div>
	</div>
</article>
