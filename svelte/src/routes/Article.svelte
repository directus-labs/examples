<script>
  import { Link, navigate, useLocation, useParams } from "svelte-navigator";
  import { directus } from "../services/directus";
  import { getAssetURL } from "../utils/get-asset-url";
  import { formatRelativeTime } from "../utils/format-relative-time";

  import BackIcon from "../components/icons/Back.svelte";
  import LinkIcon from "../components/icons/Link.svelte";
  import YoutubeIcon from "../components/icons/Youtube.svelte";
  import LinkedinIcon from "../components/icons/Linkedin.svelte";
  import TwitterIcon from "../components/icons/Twitter.svelte";
  import GithubIcon from "../components/icons/Github.svelte";
  import MoreArticles from "../components/MoreArticles.svelte";

  let id, article, moreArticles, location;

  useLocation().subscribe((value) => {
    location = value.pathname;
  });

  useParams().subscribe((value) => {
    id = value.id;
    fetchData();
  });

  async function fetchData() {
    let articleResponse;

    try {
      articleResponse = await directus.items("articles").readOne(id, {
        fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
      });

      const formattedArticle = {
        ...articleResponse,
        publish_date: formatRelativeTime(
          new Date(articleResponse.publish_date)
        ),
      };

      const moreArticlesResponse = await directus.items("articles").readByQuery({
        fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
        filter: {
          _and: [
            { id: { _neq: articleResponse.id } },
            { status: { _eq: "published" } },
          ],
        },
        limit: 2,
      });
      const formattedMoreArticles = moreArticlesResponse.data.map(
        (moreArticle) => {
          return {
            ...moreArticle,
            publish_date: formatRelativeTime(
              new Date(moreArticle.publish_date)
            ),
          };
        }
      );

      article = formattedArticle;
      moreArticles = formattedMoreArticles;
    } catch (err) {
      navigate("/404", { replace: true });
    }
  }
</script>

<div class="current-article">
  {#if article}
    <section>
      <div class="container">
        <Link to="/" class="current-article__backlink">
          <BackIcon />
          <span>Back to Articles</span>
        </Link>
        <h1 class="current-article__title">{article.title}</h1>
        <div class="current-article__detail">
          <div class="current-article__wrapperOuter">
            <div class="current-article__wrapperInner">
              <div class="current-article__authorImage">
                <img
                  src={getAssetURL(article.author.avatar)}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <div class="current-article__authorName">
                  {`${article.author.first_name} ${article.author.last_name}`}
                </div>
                <div class="current-article__time">
                  {article.publish_date}
                </div>
              </div>
            </div>
            <ul class="current-article__socials">
              <li>
                <a href={location} target="_blank" rel="noreferrer noopener">
                  <LinkIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/DirectusVideos"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/directus-io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/directus"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div class="current-article_coverImage">
            <img src={getAssetURL(article.cover_image)} alt="" />
          </div>
        </div>
        <div class="current-article__body">
          <div class="current-article__bodyContent">{@html article.body}</div>
          <ul class="current-article__bodySocials">
            <li>
              <a
                href="https://github.com/directus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/DirectusVideos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/directus-io"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/directus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  {/if}
  {#if moreArticles}
    <MoreArticles articles={moreArticles} />
  {/if}
</div>
