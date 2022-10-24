import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "~/islands/Counter.tsx";
import Nav from "~/islands/Nav.tsx";
import { DENO_ENV } from "~/utils/env.ts";

import { directusFetch } from '~/utils/directus.ts';

type Post = {
  id: number;
  title: string;
  body: string;
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
    <Layout data={data}>
      <Head>
        <title>Fresh App - {DENO_ENV}</title>
        <style>{CSS}</style>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <ul>
        {posts && posts.map( (post: Post) => (
          <li key={post.id}>
            <a href={`/article/${post.id}`}>{post.title}</a>
          </li>
        ))}
        </ul>
        <Counter start={3} />
      </div>
    </Layout>
  );
}

export const Layout = ({ children, data }) => {
  return (
    <>
      <Nav />
      {children}
      {DENO_ENV === "development"
        ? <pre>{JSON.stringify(data, null, 2)}</pre>
        : ""}
    </>
  );
};
