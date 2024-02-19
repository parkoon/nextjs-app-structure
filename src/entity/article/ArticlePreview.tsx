import { ArticleDto } from "@/shared/api/types";

export const ArticlePreview = ({
  author,
  body,
  updatedAt,
  description,
  title,
  favoritesCount,
  tagList,
}: ArticleDto) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/profile/${author.username}`}>
          <img src={author.image} />
        </a>
        <div className="info">
          <a href={`/profile/${author.username}`} className="author">
            {author.username}
          </a>
          <span className="date">{updatedAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {favoritesCount}
        </button>
      </div>
      <a
        href="/article/how-to-build-webapps-that-scale"
        className="preview-link"
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((tag) => (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
};
