import './Reply.scss';

import dog from 'lib/assets/images/dog/md_icon.png';
import { ReplyType } from 'components/Article/types/types';

interface ReplyProps {
  reply: ReplyType;
}

function Reply({ reply }: ReplyProps) {
  const timeFormat = () => {
    const date = new Date(reply.createdTime);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  return (
    <div className="reply-item">
      <div className="reply-user-info">
        <div className="reply-user-img">
          <img src={reply?.profileImg || dog} alt="유저 프로필 이지미" />
        </div>
        <div className="reply-user-nickname">
          <span>{reply?.nickName}</span>
        </div>
        <div className="article-comments-createdTime">
          <span>{timeFormat()}</span>
        </div>
      </div>
      <div className="reply-content">
        <p>{reply?.content}</p>
      </div>
    </div>
  );
}

export default Reply;
