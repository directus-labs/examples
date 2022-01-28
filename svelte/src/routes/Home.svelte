<script>
  import { onMount } from "svelte";
  import Hero from "../components/Hero.svelte";
  import Article from "../components/Article.svelte";
  import { directus } from "../services/directus";
  import { formatRelativeTime } from "../../../shared/utils/format-relative-time";

  let hero, articles;

  async function fetchData() {
    const response = await directus.items("articles").readMany({
      fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      sort: "-publish_date",
    });

    const formattedArticles = response.data.map((article) => {
      return {
        ...article,
        publish_date: formatRelativeTime(new Date(article.publish_date)),
      };
    });

    const [first, ...rest] = formattedArticles;
    hero = first;
    articles = rest;
  }

  onMount(fetchData);
</script>

<main>
  <section class="main-content">
    <div class="container">
      {#if hero}
        <Hero article={hero} />
      {/if}
      {#if articles}
        <div class="articles-grid">
          {#each articles as article, index}
            <Article {article} bordered={index !== articles.length - 1} />
          {/each}
        </div>
      {/if}
    </div>
  </section>
</main>
