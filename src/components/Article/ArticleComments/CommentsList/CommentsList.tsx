import './CommentsList.scss';
import Comment from './Comment';

type CommentType = {
  commentId: number;
  createdTime: Date;
  profileImg: string;
  nickName: string;
  content: string;
};

function CommentsList({ commentList }) {
  return (
    <div className="comments-list">
      <ul>
        {commentList?.map((comment: CommentType) => (
          <li key={comment.commentId}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
