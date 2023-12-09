<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>Blog</h1>
<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href="/blog/{post.slug}">
          {post.title}
        </a>
      </h2>
      <span>{post.publish_date} &bull; {post.author.name}</span>
    </li>
  {/each}
</ul>
