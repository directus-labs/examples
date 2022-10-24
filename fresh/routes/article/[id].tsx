import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "gfm";
import { Layout } from "~/routes/index.tsx";
import { directusFetch } from '~/utils/directus.ts';

type Post = {
    id: number;
    title: string;
    body: string;
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
    <Layout data={data}>
        <Head>
            <title>{post.title}</title>
            <style>{CSS}</style>
        </Head>
        <div class="p-4 mx-auto max-w-screen-md">
            <h1>{post.title}</h1>
            <main
                data-color-mode="light"
                data-light-theme="light"
                data-dark-theme="dark"
                class="markdown-body"
                dangerouslySetInnerHTML={{ __html: body }}
            >
            </main>
        </div>
    </Layout>
  );    
}
