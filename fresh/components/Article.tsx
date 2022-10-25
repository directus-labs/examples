import { getAssetURL } from "~/utils/directus.ts";

export default function Article({ article, bordered }) {
  return (
    <article class={`article ${bordered}`}>
      <div class="article__topWrapper">
        <div class="article__imageWrapper">
          <img
            src={getAssetURL(article.cover_image?.id)}
            alt=""
            loading="lazy"
          />
        </div>
        <span aria-hidden="true" class="tag">
          Writing
        </span>
      </div>
      <div class="article__bottomWrapper">
        <h1 class="article__title">
          <a href={`/article/${article.id}`}>{article.title}</a>
        </h1>
        <div class="article__detail">
          <div class="article__detailAuthor">
            <img
              src={getAssetURL(article.author.avatar?.id)}
              alt=""
              loading="lazy"
            />
          </div>
          <div class="article__detailInner">
            <div class="article__detailInnerAuthor">
              {`${article.author.first_name} ${article.author.last_name}`}
            </div>
            <div class="article__detailInnerTime">
              {article.publish_date}
            </div>
            <div class="article__detailInnerCategory">Writing</div>
          </div>
        </div>
      </div>
    </article>
  );
}