import './CommentArea.scss';
import React from 'react';

type CommentAreaProps = {
  comment: string;
  handleCommentValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function CommentArea({ comment, handleCommentValue }: CommentAreaProps) {
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
