import './ArticleComments.scss';
import dog from 'lib/assets/images/dog/md_icon.png';
import { useUser } from 'components/auth/hooks/useUser';
import { useState } from 'react';
import { useArticleDetail } from '../hooks/useArticleDetail';
import { useCreateComment } from '../hooks/useCreateComment';
import CommentsList from './CommentsList/CommentsList';
import CommentArea from './CommentArea/CommentArea';

function ArticleComments() {
  const [comment, setComment] = useState('');

  const article = useArticleDetail();

  const user = useUser();
  const { mutate: commentMutate } = useCreateComment();
  // content, commentId = null, commentId는 대댓글인 경우 본댓의 ID

  const handleCommentValue = e => setComment(e.target.value);

  const onCommentSubmit = e => {
    e.preventDefault();
    commentMutate({ content: comment, commentId: null });
  };

  return (
    <section className="article-comments-section">
      <form className="article-comments-form" onSubmit={onCommentSubmit}>
        <div className="article-comments-header">
          <div className="article-comments-user-info">
            <div className="article-comments-user-img">
              <img src={user?.profileImg || dog} alt="유저 프로필 이지미" />
            </div>
            <div className="article-comments-user-nickname">
              <span>{user?.nickName || '로그인해주세요'}</span>
            </div>
            <button type="submit" disabled={!user || comment.length === 0}>
              <span>등록</span>
            </button>
          </div>
          <CommentArea
            comment={comment}
            handleCommentValue={handleCommentValue}
          />
        </div>
      </form>
      <CommentsList commentList={article.commentList} />
    </section>
  );
}

export default ArticleComments;
