import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { getAssetURL } from "../utils/get-asset-url";

interface HeroProps {
  article: object
}

export default component$<HeroProps>(({ article }) => {
  return (
    <article class="hero">
      <div class="hero__topWrapper">
        <div class="hero__imageWrapper">
          <img
            src={getAssetURL(article.value.cover_image)}
            alt=""
            width="1920"
            height="1281"
            loading="lazy"
          />
        </div>
        <span aria-hidden="true" class="tag">
          Writing
        </span>
      </div>
      <h1 class="hero__title">
        <Link href={`/articles/${article.value.id}`}>{article.value.title}</Link>
      </h1>
      <p class="hero__excerpt">{article.value.excerpt}</p>
      <div class="hero__detail">
        <div class="hero__detailAuthorImage">
          <img
            src={getAssetURL(article.value.author.avatar)}
            alt=""
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <div>
          <div class="hero__detailAuthorName">
            {`${article.value.author.first_name} ${article.value.author.last_name}`}
          </div>
          <div>{article.value.publish_date}</div>
          <div class="hero__detailCategory">Writing</div>
        </div>
      </div>
    </article>
  );
});
