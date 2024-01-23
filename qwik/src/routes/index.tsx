import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/Hero";
import Article from "~/components/Article";

import { directus } from "../services/directus";
import { formatRelativeTime } from "../utils/format-relative-time";

export const head: DocumentHead = {
  title: "Welcome to Qwik & Directus",
  meta: [
    {
      name: "description",
      content: "A Qwik & Directus example app",
    },
  ],
};

export const useArticlesAndHero = routeLoader$(async () => {
  const response = await directus.items("articles").readByQuery({
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
  return {
    hero: first,
    articles: rest
  }
});

export default component$(() => {
  const { hero, articles } = useArticlesAndHero().value;

  return (
    <main>
      <section class="main-content">
        <div class="container">
          {hero && <Hero article={hero} />}

          {articles && (
            <div class="articles-grid">
              {articles.map((article, index) => (
                <Article
                  key={index}
                  article={article}
                  bordered={index !== articles.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
});

