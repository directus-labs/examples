<script lang="ts">
import { useArticles } from '~/logic/article'

export default definePageComponent({
  async getStaticPaths () {
    const articles = await useArticles({
      fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
      filter: { status: { _eq: 'published' } },
      limit: -1,
    })

    return articles.map(article => ({
      params: { id: String(article.id) },
      props: { article },
    }))
  },
})
</script>

<script setup lang="ts">
import type { Article } from '~/logic/article'

const { article } = defineProps<{ article: Article }>()

const { frontmatter } = usePage()
frontmatter.title = article.title
frontmatter.description = article.excerpt
</script>

<template>
  <div class="current-article">
    <section>
      <div class="container">
        <a href="/" class="current-article__backlink">
          <IconBack class="icon"/>
          <span>Back to Articles</span>
        </a>
        <h1 class="current-article__title">{{ article.title }}</h1>
        <div class="current-article__detail">
          <div class="current-article__wrapperOuter">
            <div class="current-article__wrapperInner">
              <div class="current-article__authorImage">
                <img
                  :src="article.author.avatar"
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
                  <IconLink/>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/DirectusVideos"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconYoutube/>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/directus-io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconLinkedin/>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/directus"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconTwitter/>
                </a>
              </li>
            </ul>
          </div>
          <div class="current-article_coverImage">
            <img :src="article.cover_image" alt="" />
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
                <IconGithub/>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/DirectusVideos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconYoutube/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/directus-io"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconLinkedin/>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/directus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconTwitter/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <MoreArticles :key="article.id" :for="article"/>
  </div>
</template>
