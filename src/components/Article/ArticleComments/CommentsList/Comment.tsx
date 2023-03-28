import './Comment.scss';
import dog from 'lib/assets/images/dog/md_icon.png';
import useConfirm from 'components/common/hooks/useConfirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useUser } from 'components/auth/hooks/useUser';
import { useOutsideDetection } from 'components/common/hooks/useOutsideDetection';
import { useDeleteComment } from 'components/Article/hooks/useDeleteComment';
import { useEditComment } from 'components/Article/hooks/useEditComment';
import { useAddComment } from 'components/Article/hooks/useAddComment';
import { useReply } from 'components/Article/hooks/useReply';
import { useState } from 'react';
import CommentArea from '../CommentArea/CommentArea';
import Reply from './Reply/Reply';

type CommentType = {
  commentId: number;
  createdTime: Date;
  profileImg: string;
  nickName: string;
  content: string;
};

type CommentProps = {
  comment: CommentType;
};

type ReplyType = {
  createdTime: Date;
  profileImg: string;
  nickName: string;
  content: string;
};

function Comment({ comment }: CommentProps): JSX.Element {
  const user = useUser();
  const replyList = useReply(comment.commentId);
  const { mutate: deleteCommentMutate } = useDeleteComment();
  const { mutate: editCommentMutate } = useEditComment();
  const { mutate: addReplyMutate } = useAddComment();
  const {
    open: commentOpen,
    openContent: openComment,
    closeContent: closeComment,
    targetRef: commentRef,
  } = useOutsideDetection();

  const deleteConfirm = useConfirm(
    () => deleteCommentMutate(comment.commentId),
    '정말로 삭제하시겠습니까?',
  );

  const {
    open: replyOpen,
    openContent: openReply,
    closeContent: closeReply,
    targetRef: replyRef,
  } = useOutsideDetection();

  const [commentValue, setCommentValue] = useState('');
  const [replyValue, setReplyValue] = useState('');
  const [showMore, setShowMore] = useState(false);

  const timeFormat = () => {
    const date = new Date(comment.createdTime);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const handleCommentValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setCommentValue(e.target.value);
  };
  const handleReplyValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setReplyValue(e.target.value);
  };
  const handleShowMore = () => setShowMore(!showMore);

  const editComment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (commentValue === '') {
      alert('댓글을 입력해주세요');
      openComment();
      return;
    }
    editCommentMutate({
      content: commentValue,
      commentId: comment.commentId,
    });
    setCommentValue('');
  };

  const addReply = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (replyValue === '') {
      alert('댓글을 입력해주세요');
      openReply();
      return;
    }
    addReplyMutate({
      content: replyValue,
      commentId: comment.commentId,
    });
    setReplyValue('');
  };

  return (
    <div className="comments-list-item">
      <form
        className="comments-content"
        ref={commentRef}
        onSubmit={editComment}
      >
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
                type={commentOpen ? 'button' : 'submit'}
                className="comment-button"
                onClick={() => (!commentOpen ? openComment() : closeComment())}
              >
                <span>{!commentOpen ? '수정' : '등록'}</span>
              </button>
              <button
                type="button"
                className="comment-button"
                onClick={() => {
                  if (deleteConfirm !== null) {
                    deleteConfirm();
                  }
                }}
              >
                <span>삭제</span>
              </button>
            </div>
          )}
        </div>
        <div className="comment-list-item-content">
          <p>{comment.content}</p>
          {commentOpen && (
            <CommentArea
              comment={commentValue}
              handleCommentValue={handleCommentValue}
            />
          )}
        </div>
      </form>
      <form
        className="comment-list-item-reply"
        ref={replyRef}
        onSubmit={addReply}
      >
        {replyOpen && (
          <CommentArea
            comment={replyValue}
            handleCommentValue={handleReplyValue}
          />
        )}
        <div className="reply-show-more-button">
          {replyList?.length > 0 && (
            <button
              type="button"
              className="show-more-button"
              onClick={handleShowMore}
            >
              <span>
                {showMore ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
              <span>댓글 {replyList.length}개 더보기</span>
            </button>
          )}
          <button
            type={replyOpen ? 'button' : 'submit'}
            className="comment-button"
            onClick={() => (!replyOpen ? openReply() : closeReply())}
          >
            <span>{!replyOpen ? '답글' : '등록'}</span>
          </button>
        </div>
      </form>
      <ul>
        {showMore && replyList?.map((re: ReplyType) => <Reply reply={re} />)}
      </ul>
    </div>
  );
}

export default Comment;
