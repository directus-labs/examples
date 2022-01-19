<template>
  <div class="current-article">
    <section>
      <div class="container">
        <nuxt-link to="/" class="current-article__backlink">
          <IconsBack class="icon" />
          <span>Back to Articles</span>
        </nuxt-link>
        <h1 class="current-article__title">{{ article.title }}</h1>
        <div class="current-article__detail">
          <div class="current-article__wrapperOuter">
            <div class="current-article__wrapperInner">
              <div class="current-article__authorImage">
                <img
                  :src="$assetURL(article.author.avatar)"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <div class="current-article__authorName">
                  {{
                    `${article.author.first_name} ${article.author.last_name}`
                  }}
                </div>
                <div class="current-article__time">
                  {{ article.publish_date }}
                </div>
              </div>
            </div>
            <ul class="current-article__socials">
              <li>
                <a
                  :href="$route.path"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconsLink />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/DirectusVideos"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconsYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/directus-io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/directus"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconsTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div class="current-article_coverImage">
            <img :src="$assetURL(article.cover_image)" alt="" />
          </div>
        </div>
        <div class="current-article__body">
          <div v-html="article.body" class="current-article__bodyContent"></div>
          <ul class="current-article__bodySocials">
            <li>
              <a
                href="https://github.com/directus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/DirectusVideos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconsYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/directus-io"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/directus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <MoreArticles />
  </div>
</template>

<script>
import { formatRelativeTime } from "../../../shared/utils/format-relative-time";

export default {
  async asyncData({ $directus, params, error }) {
    const { id } = params;

    let article;
    try {
      article = await $directus.items("articles").readOne(id, {
        fields: ["*", "author.avatar", "author.first_name", "author.last_name"]
      });
    } catch (err) {
      return error({ statusCode: 404, message: "Article not found" });
    }

    article = {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date))
    };

    return { article };
  }
};
</script>
