import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Article = ({ article, bordered }) => {
  return (
    <article className={`article ${bordered}`}>
      <div className="article__topWrapper">
        <div className="article__imageWrapper">
          <img
            src={`${process.env.GATSBY_DIRECTUS_URL}/assets/${article.cover_image.id}`}
            alt=""
            loading="lazy"
          />
        </div>
        <span aria-hidden="true" className="tag">
          Writing
        </span>
      </div>
      <div className="article__bottomWrapper">
        <h1 className="article__title">
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </h1>
        <div className="article__detail">
          <div className="article__detailAuthor">
            <img
              src={`${process.env.GATSBY_DIRECTUS_URL}/assets/${article.author.avatar.id}`}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="article__detailInner">
            <div className="article__detailInnerAuthor">
              {`${article.author.first_name} ${article.author.last_name}`}
            </div>
            <div className="article__detailInnerTime">
              {article.date_created}
            </div>
            <div className="article__detailInnerCategory">Writing</div>
          </div>
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  bordered: PropTypes.bool.isRequired,
};

export default Article;
