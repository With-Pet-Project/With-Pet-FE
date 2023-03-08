import './CommentsList.scss';
import Comment from './Comment';

function CommentsList({ commentList }) {
  return (
    <div className="comments-list">
      <ul>
        {commentList?.map(comment => (
          <li key={comment.commentId}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
