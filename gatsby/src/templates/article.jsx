import * as React from "react";
import { Link } from "gatsby";
import DefaultLayout from "../layouts/default";
import MoreArticles from "../components/moreArticles";
import IconBack from "../components/icons/back";
import IconLink from "../components/icons/link";
import IconGithub from "../components/icons/github";
import IconYoutube from "../components/icons/youtube";
import IconLinkedin from "../components/icons/linkedin";
import IconTwitter from "../components/icons/twitter";
import { getAssetURL } from "../utils/get-asset-url";

export default function ArticleTemplate({ pageContext }) {
  const article = pageContext.article;
  const moreArticles = pageContext.moreArticles;

  return (
    <DefaultLayout>
      <div className="current-article">
        <section>
          <div className="container">
            <Link to="/" className="current-article__backlink">
              <IconBack className="icon" />
              <span>Back to Articles</span>
            </Link>
            <h1 className="current-article__title">{article.title}</h1>
            <div className="current-article__detail">
              <div className="current-article__wrapperOuter">
                <div className="current-article__wrapperInner">
                  <div className="current-article__authorImage">
                    <img
                      src={getAssetURL(article.author.avatar.id)}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="current-article__authorName">
                      {`${article.author.first_name} ${article.author.last_name}`}
                    </div>
                    <div className="current-article__time">
                      {article.publish_date}
                    </div>
                  </div>
                </div>
                <ul className="current-article__socials">
                  <li>
                    <a
                      href={`/articles/${article.id}`}
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
              <div className="current-article_coverImage">
                <img src={getAssetURL(article.cover_image.id)} alt="" />
              </div>
            </div>
            <div className="current-article__body">
              <div
                className="current-article__bodyContent"
                dangerouslySetInnerHTML={{ __html: article.body }}
              ></div>
              <ul className="current-article__bodySocials">
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
        <MoreArticles articles={moreArticles} />
      </div>
    </DefaultLayout>
  );
}
