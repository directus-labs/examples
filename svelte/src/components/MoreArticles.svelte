<script>
  import Article from "./Article.svelte";
  export let articles;
</script>

<section class="more-articles">
  <div class="container">
    <h1 class="more-articles__title">More Articles</h1>
    {#if articles}
      <div class="articles-grid">
        {#each articles as article, index}
          <Article {article} bordered={index !== articles.length - 1} />
        {/each}
      </div>
    {/if}
  </div>
</section>
