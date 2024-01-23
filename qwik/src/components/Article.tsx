import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { getAssetURL } from "../utils/get-asset-url";

interface ArticleProps {
  article: object,
  bordered: boolean
}

export default component$<ArticleProps>(({ article, bordered }) => {
  return (
    <article className={`article ${bordered}`}>
      <div className="article__topWrapper">
        <div className="article__imageWrapper">
          <img
            src={getAssetURL(article.cover_image)}
            alt=""
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <span aria-hidden="true" className="tag">
          Writing
        </span>
      </div>
      <div className="article__bottomWrapper">
        <h1 className="article__title">
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </h1>
        <div className="article__detail">
          <div className="article__detailAuthor">
            <img
              src={getAssetURL(article.author.avatar)}
              alt=""
              width="1920"
              height="1280"
              loading="lazy"
            />
          </div>
          <div className="article__detailInner">
            <div className="article__detailInnerAuthor">
              {`${article.author.first_name} ${article.author.last_name}`}
            </div>
            <div className="article__detailInnerTime">
              {article.publish_date}
            </div>
            <div className="article__detailInnerCategory">Writing</div>
          </div>
        </div>
      </div>
    </article>
  );
});
