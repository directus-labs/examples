import { Image, Link } from "blitz"
import { getDirectusClient } from "app/services/directus"
import MoreArticles from "app/components/MoreArticles"
import IconBack from "app/components/icons/Back"
import IconLink from "app/components/icons/Link"
import IconGithub from "app/components/icons/Github"
import IconYoutube from "app/components/icons/Youtube"
import IconLinkedin from "app/components/icons/Linkedin"
import IconTwitter from "app/components/icons/Twitter"
import { formatRelativeTime } from "../../../../shared/utils/format-relative-time"
import { getAssetURL } from "app/utils/get-asset-url"

export default function ArticlePage({ article, moreArticles }) {
  return (
    <div className="current-article">
      <section>
        <div className="container">
          <Link href="/">
            <a className="current-article__backlink">
              <IconBack className="icon" />
              <span>Back to Articles</span>
            </a>
          </Link>
          <h1 className="current-article__title">{article.title}</h1>
          <div className="current-article__detail">
            <div className="current-article__wrapperOuter">
              <div className="current-article__wrapperInner">
                <div className="current-article__authorImage">
                  <Image
                    src={getAssetURL(article.author.avatar)}
                    layout="fill"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="current-article__authorName">
                    {`${article.author.first_name} ${article.author.last_name}`}
                  </div>
                  <div className="current-article__time">{article.publish_date}</div>
                </div>
              </div>
              <ul className="current-article__socials">
                <li>
                  <a href={`/articles/${article.id}`} target="_blank" rel="noreferrer noopener">
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
                  <a href="https://twitter.com/directus" target="_blank" rel="noreferrer noopener">
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
                <a href="https://github.com/directus" target="_blank" rel="noreferrer noopener">
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
                <a href="https://twitter.com/directus" target="_blank" rel="noreferrer noopener">
                  <IconTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MoreArticles articles={moreArticles} />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const directus = await getDirectusClient()

  const article = await directus.items("articles").readOne(id, {
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
  })

  if (!article) {
    return {
      notFound: true,
    }
  }

  const formattedArticle = {
    ...article,
    publish_date: formatRelativeTime(new Date(article.publish_date)),
  }

  const moreArticlesResponse = await directus.items("articles").readByQuery({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    filter: {
      _and: [{ id: { _neq: article.id } }, { status: { _eq: "published" } }],
    },
    limit: 2,
  })
  const formattedMoreArticles = moreArticlesResponse.data.map((moreArticle) => {
    return {
      ...moreArticle,
      publish_date: formatRelativeTime(new Date(moreArticle.publish_date)),
    }
  })

  return {
    props: { article: formattedArticle, moreArticles: formattedMoreArticles },
  }
}
