import { Link } from 'react-router-dom';

import dog from 'lib/assets/images/dog/md_icon.png';
import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { useArticleLike } from '../hooks/useArticleLike';

function ArticleItem({ article }) {
  const { mutate, isAlike, setIsAlike } = useArticleLike(article);

  const timeFormat = () => {
    return new Date(article.createdTime).toLocaleDateString();
  };

  return (
    <div className="Article-item">
      <div className="article-user-info">
        <img
          className="article-user-img"
          src={article.profileImg || dog}
          alt={article.nickName}
          aria-label="user profile img"
        />
        <div className="article-nickname-date">
          <div>
            <span>{article.nickName}</span>
          </div>
          <div>
            <span>{timeFormat()}</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h2>반려견 산책 올바르게 하는 방법{/** article Title 추가 예정 */}</h2>
        <Link to={`/community/${article.articleId}`}>
          <div
            className="article-detail-text"
            dangerouslySetInnerHTML={{ __html: article.detailText }}
          />
        </Link>
        <div className="article-tag">
          <span>{ARTICLE_TAG[article.tag]}</span>
        </div>
        <div className="like-comment-number">
          <button type="button">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20.9599V11.8999H10.97L17.96 21.4599C18.55 22.2599 20 21.9099 20 20.9699V20.9599Z"
                fill="#FFF5CA"
              />
              <path
                d="M18 1.8999H2C0.89543 1.8999 0 2.79533 0 3.8999V14.8999C0 16.0045 0.89543 16.8999 2 16.8999H18C19.1046 16.8999 20 16.0045 20 14.8999V3.8999C20 2.79533 19.1046 1.8999 18 1.8999Z"
                fill="#FFF5CA"
              />
              <path
                d="M5 10.3999C5.55228 10.3999 6 9.95219 6 9.3999C6 8.84762 5.55228 8.3999 5 8.3999C4.44772 8.3999 4 8.84762 4 9.3999C4 9.95219 4.44772 10.3999 5 10.3999Z"
                fill="#FFE259"
              />
              <path
                d="M10 10.3999C10.5523 10.3999 11 9.95219 11 9.3999C11 8.84762 10.5523 8.3999 10 8.3999C9.44772 8.3999 9 8.84762 9 9.3999C9 9.95219 9.44772 10.3999 10 10.3999Z"
                fill="#FFE259"
              />
              <path
                d="M15 10.3999C15.5523 10.3999 16 9.95219 16 9.3999C16 8.84762 15.5523 8.3999 15 8.3999C14.4477 8.3999 14 8.84762 14 9.3999C14 9.95219 14.4477 10.3999 15 10.3999Z"
                fill="#FFE259"
              />
            </svg>
            <span>{article.likeCnt}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              mutate(article.articleId);
              setIsAlike(!isAlike);
            }}
          >
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              stroke="#FFE259"
              fill="#FFE259"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.71 18.3702C10.31 18.7302 9.7 18.7302 9.3 18.3702L8.98 18.0802C7.21 16.4602 5.75 15.0702 4.6 13.8902C3.45 12.7102 2.53 11.6602 1.85 10.7402C1.17 9.81017 0.69 8.98018 0.41 8.23018C0.13 7.48018 0 6.72018 0 5.95018C0 4.45018 0.5 3.20018 1.51 2.19018C2.52 1.18018 3.76 0.680176 5.25 0.680176C6.2 0.680176 7.08 0.910176 7.89 1.36018C8.7 1.81018 9.4 2.46018 10 3.31018C10.7 2.41018 11.44 1.75018 12.23 1.32018C13.02 0.890176 13.86 0.680176 14.76 0.680176C16.24 0.680176 17.49 1.18018 18.5 2.19018C19.51 3.20018 20.01 4.45018 20.01 5.95018C20.01 6.72018 19.87 7.48018 19.6 8.23018C19.33 8.98018 18.85 9.82018 18.16 10.7402C17.47 11.6602 16.56 12.7202 15.41 13.8902C14.26 15.0602 12.8 16.4602 11.03 18.0802L10.71 18.3702Z"
                stroke="#FFE259"
                fill={isAlike ? '#FFFE259' : '#FFF'}
              />
            </svg>
            <span>{article.commentCnt}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
