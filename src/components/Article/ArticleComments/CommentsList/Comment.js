import './Comment.scss';
import dog from 'lib/assets/images/dog/md_icon.png';
import { useUser } from 'components/auth/hooks/useUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDeleteComment } from 'components/Article/hooks/useDeleteComment';
import { useEditComment } from 'components/Article/hooks/useEditComment';
import { useState } from 'react';
import CommentArea from '../CommentArea/CommentArea';

function Comment({ comment }) {
  const user = useUser();
  const { deleteCommentMutate } = useDeleteComment();
  const { editCommentMutate } = useEditComment();
  const [commentValue, setCommentValue] = useState('');
  const [modifyMode, setModifyMode] = useState(false);

  const timeFormat = () => {
    const date = new Date(comment.createdTime);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const handleModifyMode = () => setModifyMode(true);
  const handleCommentValue = e => setCommentValue(e.target.value);

  const editComment = () => {
    editCommentMutate({
      content: commentValue,
      commentId: comment.commentId,
    });
    setModifyMode(false);
    setCommentValue('');
  };

  return (
    <div className="comments-list-item">
      <div className="article-comments-user-info">
        <div className="article-comments-user-img">
          <img src={comment?.profileImg || dog} alt="유저 프로필 이지미" />
        </div>
        <div className="article-comments-user-nickname">
          <span>{comment?.nickName}</span>
        </div>
        <div className="article-comments-createdTime">
          <span>{timeFormat()}</span>
        </div>
        {user?.nickName === comment?.nickName && (
          <div className="comment-edit-delete-button">
            <button
              type="button"
              className="comment-edit-button"
              onClick={() => (!modifyMode ? handleModifyMode() : editComment())}
            >
              <span>수정</span>
            </button>
            <button
              type="button"
              className="comment-delete-button"
              onClick={() => deleteCommentMutate(comment.commentId)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
      </div>
      <div className="comment-list-item-content">
        <p>{comment.content}</p>
        {modifyMode && (
          <CommentArea
            comment={commentValue}
            handleCommentValue={handleCommentValue}
          />
        )}
      </div>
    </div>
  );
}

export default Comment;
