import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "~/islands/Counter.tsx";
import { DENO_ENV } from "~/utils/env.ts";
import Article from "~/components/Article.tsx";
import { directusFetch } from '~/utils/directus.ts';

type Post = {
  id: number;
  title: string;
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

type HomePage = {
  posts: Post[];
  CSS?: string;
}

export const handler: Handlers<Posts | null> = {
  async GET(_, ctx) {

    const data = await directusFetch({
      query: `
        query {
          articles{
            id
            title
            publish_date
            cover_image {
              id
            }
            author {
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

    const posts = data.articles || [];
    return ctx.render({
      posts: posts, 
      CSS: CSS
    });
  },
};

export default function Home({ data }: PageProps<HomePage | null>) {
  const { posts, CSS } = data;

  return (
    <>
      <Head>
        <title>Fresh App - {DENO_ENV}</title>
        <style>{CSS}</style>
      </Head>
      <div>
        <main>
          <section class="main-content">
            <div class="container">
              <div class="articles-grid">
                {posts.map((article, index) => (
                  <Article
                    key={index}
                    article={article}
                    bordered={index !== posts.length - 1}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}