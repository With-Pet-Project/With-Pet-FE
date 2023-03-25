import { ReactElement } from 'react';

interface MyPostProps {
  articleId: number;
  title: string;
  createdTime: Date;
}

function MyPost({ articleId, title, createdTime }: MyPostProps): ReactElement {
  const convertDate = (date: Date): string =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <li className="mypost" key={articleId} data-cy="mypost-item">
      <span className="date">{convertDate(new Date(createdTime))}</span>
      <p className="content">{title}</p>
    </li>
  );
}

export default MyPost;
