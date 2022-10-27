import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "gfm";
import { directusFetch, getAssetURL } from '~/utils/directus.ts';
import { formatRelativeTime } from "~/utils/format-relative-time.ts";
import { BASE_URL, DENO_ENV } from "~/utils/env.ts";
import { HeadElement } from "~/components/Head.tsx";

import IconBack from "~/components/icons/Back.tsx";
import IconLink from "~/components/icons/Link.tsx";
import IconGithub from "~/components/icons/Github.tsx";
import IconYoutube from "~/components/icons/Youtube.tsx";
import IconLinkedin from "~/components/icons/Linkedin.tsx";
import IconTwitter from "~/components/icons/Twitter.tsx";

type Post = {
    id: number;
    title: string;
    excerpt: string;
    body: string;
    publish_date: Date;
    cover_image?: {
      id: string;
    };
    author?: {
      avatar?: {
        id: string;
      };  
      id: string;
      first_name: string;
      last_name: string;
    };  
  }
  
  type Posts = Post[];
  
  type Page = {
    posts: Post[];
    body: string;
    CSS?: string;
  }
  
  export const handler: Handlers<Posts | null> = {
    async GET(_, ctx) {
      const { id } = ctx.params;

      const data = await directusFetch({
        query: `
          query {
            articles_by_id(id: ${id}){
              id
              title
              body
              excerpt
              publish_date
              cover_image {
                id
              }
              author{
                avatar {
                  id
                }
                id
                first_name
                last_name
              }  
            }
          }
        `,
        variables: {}
      });
      const post = data.articles_by_id || [];
      let body = post.body && render(post.body);
      return ctx.render({
        post: post, 
        body: body,
        CSS: CSS
      });
    },
  };

export default function Article({ data }: PageProps<Page | null>) {
  const { post, body, CSS } = data;
  return (
    <>
      <Head>
          <style>{CSS}</style>
      </Head>
      <HeadElement
        description={post.excerpt}
        title={post.title}
        url={`${BASE_URL}/articles/${post.id}`}
      />
      <div class="current-article">
        <section>
          <div class="container">
            <a href="/">
              <a class="current-article__backlink">
                <IconBack class="icon" />
                <span>Back to Articles</span>
              </a>
            </a>
            <h1 class="current-article__title">{post.title}</h1>
            <div class="current-article__detail">
              <div class="current-article__wrapperOuter">
                <div class="current-article__wrapperInner">
                  <div class="current-article__authorImage">
                    <img
                      src={getAssetURL(post.author.avatar?.id)}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="current-article__authorName">
                      {`${post.author.first_name} ${post.author.last_name}`}
                    </div>
                    <div class="current-article__time">
                      {formatRelativeTime(new Date(post.publish_date))} 
                    </div>
                  </div>
                </div>
                <ul class="current-article__socials">
                  <li>
                    <a
                      href={`/articles/${post.id}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconLink />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/DirectusVideos"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/directus-io"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/directus"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconTwitter />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="current-article_coverImage">
                <img src={getAssetURL(post.cover_image?.id)} alt="" />
              </div>
            </div>
            <div class="current-article__body">
              <div
                class="current-article__bodyContent"
                dangerouslySetInnerHTML={{ __html: body }}
              ></div>
              <ul class="current-article__bodySocials">
                <li>
                  <a
                    href="https://github.com/directus"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/DirectusVideos"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/directus-io"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/directus"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );    
}
