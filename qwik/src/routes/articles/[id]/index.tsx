import { component$, useSignal, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useNavigate, useLocation, routeLoader$ } from '@builder.io/qwik-city';

import IconBack from "../../../components/icons/Back";
import IconLink from "../../../components/icons/Link";
import IconGithub from "../../../components/icons/Github";
import IconYoutube from "../../../components/icons/Youtube";
import IconLinkedin from "../../../components/icons/Linkedin";
import IconTwitter from "../../../components/icons/Twitter";
import MoreArticles from "../../../components/MoreArticles";
import NotFound from "../../404";

import { directus } from "../../../services/directus";
import { formatRelativeTime } from "../../../utils/format-relative-time";
import { getAssetURL } from "../../../utils/get-asset-url";

 
export const useArticleLoader = routeLoader$(async ({ params, status, redirect }) => {
  try {
    const articleResponse = await directus.items("articles").readOne(params.id, {
      fields: [
        "*",
        "author.avatar",
        "author.first_name",
        "author.last_name",
      ],
    });

    const formattedArticle = {
      ...articleResponse,
      publish_date: formatRelativeTime(
        new Date(articleResponse.publish_date)
      ),
    };

    return formattedArticle;
  } catch(error) {
    status(404);
    // redirect('/404');
  }
});
 
export const useMoreArticlesLoader = routeLoader$(async ({ params, status }) => {
  const moreArticlesResponse = await directus.items("articles").readByQuery({
    fields: [
      "*",
      "author.avatar",
      "author.first_name",
      "author.last_name",
    ],
    filter: {
      _and: [
        { id: { _neq: params.id } },
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

  return formattedMoreArticles;
});


export default component$(() => {
  const article = useArticleLoader();
  const moreArticles = useMoreArticlesLoader();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.params;

  useVisibleTask$(() => {
    document.documentElement.scrollTo(0, 0);
  });

  if (!article.value) {
    return <NotFound />;
  }

  return (
    <div class="current-article">
      {article.value && (
        <section>
          <div class="container">
            <Link href="/" class="current-article__backlink">
              <IconBack className="icon" />
              <span>Back to Articles</span>
            </Link>
            <h1 class="current-article__title">{article.value.title}</h1>
            <div class="current-article__detail">
              <div class="current-article__wrapperOuter">
                <div class="current-article__wrapperInner">
                  <div class="current-article__authorImage">
                    <img
                      src={getAssetURL(article.value.author.avatar)}
                      alt=""
                      width="500"
                      height="500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="current-article__authorName">
                      {`${article.value.author.first_name} ${article.value.author.last_name}`}
                    </div>
                    <div class="current-article__time">
                      {article.value.publish_date}
                    </div>
                  </div>
                </div>
                <ul class="current-article__socials">
                  <li>
                    <a
                      href={`/articles/${article.value.id}`}
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
                <img src={getAssetURL(article.value.cover_image)} alt="" width="1920" height="1280" />
              </div>
            </div>
            <div class="current-article__body">
              <div
                class="current-article__bodyContent"
                dangerouslySetInnerHTML={article.value.body}
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
      )}

      {moreArticles.value && <MoreArticles articles={moreArticles} />}
    </div>
  );
});
