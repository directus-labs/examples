import { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import MoreArticles from "../components/MoreArticles";
import IconBack from "../components/icons/Back";
import IconLink from "../components/icons/Link";
import IconGithub from "../components/icons/Github";
import IconYoutube from "../components/icons/Youtube";
import IconLinkedin from "../components/icons/Linkedin";
import IconTwitter from "../components/icons/Twitter";
import { directus } from "../services/directus";
import { formatRelativeTime } from "../utils/format-relative-time";
import { getAssetURL } from "../utils/get-asset-url";

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [moreArticles, setMoreArticles] = useState(null);

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    async function fetchData() {
      let articleResponse;

      try {
        articleResponse = await directus.items("articles").readOne(id, {
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

        const moreArticlesResponse = await directus.items("articles").readByQuery({
          fields: [
            "*",
            "author.avatar",
            "author.first_name",
            "author.last_name",
          ],
          filter: {
            _and: [
              { id: { _neq: articleResponse.id } },
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

        setArticle(formattedArticle);
        setMoreArticles(formattedMoreArticles);
      } catch (err) {
        navigate("/404", { replace: true });
      }
    }
    fetchData();
  }, [id, navigate]);

  return (
    <div className="current-article">
      {article && (
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
                      src={getAssetURL(article.author.avatar)}
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
                <img src={getAssetURL(article.cover_image)} alt="" />
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
      )}
      {moreArticles && <MoreArticles articles={moreArticles} />}
    </div>
  );
}
