import './CommentArea.scss';

function CommentArea({ comment, handleCommentValue }) {
  return (
    <textarea
      className="comments-textarea"
      value={comment}
      onChange={handleCommentValue}
      placeholder="댓글을 입력해주세요."
    />
  );
}

export default CommentArea;
