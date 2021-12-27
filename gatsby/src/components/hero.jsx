import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getAssetURL } from "../utils/get-asset-url";

export default function Hero({ article }) {
  return (
    <article className="hero">
      <div className="hero__topWrapper">
        <div className="hero__imageWrapper">
          <img
            src={getAssetURL(article.cover_image.id)}
            alt=""
            loading="lazy"
          />
        </div>
        <span aria-hidden="true" className="tag">
          Writing
        </span>
      </div>
      <h1 className="hero__title">
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h1>
      <p className="hero__excerpt">{article.excerpt}</p>
      <div className="hero__detail">
        <div className="hero__detailAuthorImage">
          <img
            src={getAssetURL(article.author.avatar.id)}
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <div className="hero__detailAuthorName">
            {`${article.author.first_name} ${article.author.last_name}`}
          </div>
          <div>{article.date_created}</div>
          <div className="hero__detailCategory">Writing</div>
        </div>
      </div>
    </article>
  );
}

Hero.propTypes = {
  article: PropTypes.object.isRequired,
};
