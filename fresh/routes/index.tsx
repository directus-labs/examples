import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "~/islands/Counter.tsx";
import { DENO_ENV } from "~/utils/env.ts";

type Post {
  title: string;
  content: string;
}

type Posts = Post[];

export const handler: Handlers<Posts | null> = {
  async GET(_, ctx) {
    return ctx.render(posts);
  },
};

export default function Home({ data }: PageProps<Posts | null>) {
  return (
    <>
      <Head>
        <title>Fresh App - {DENO_ENV}</title>
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
        <Counter start={3} />
      </div>
    </>
  );
}
