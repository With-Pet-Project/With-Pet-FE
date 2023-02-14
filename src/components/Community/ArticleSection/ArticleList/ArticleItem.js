import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

function ArticleItem({ article }) {
  return (
    <div className="Article-item">
      <div className="article-user-info">
        <img
          className="article-user-img"
          src={article.profileImg}
          alt={article.nickName}
          aria-label="user profile img"
        />
        <div className="article-nickname-date">
          <div>
            <span>{article.nickName}</span>
          </div>
          <div>
            <span>{article.createdTime}</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h2>반려견 산책 올바르게 하는 방법{/** article Title 추가 예정 */}</h2>
        <p>{article.detail}</p>
        <div className="article-tag">
          <span>{ARTICLE_TAG[article.tag]}</span>
        </div>
        <div className="like-comment-number">
          <button type="button">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{article.likeCnt}</span>
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faComment} />
            <span>{article.commentCnt}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
