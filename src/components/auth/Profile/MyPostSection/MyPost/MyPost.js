function MyPost({ articleId, title, createdTime }) {
  const convertDate = date =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <li className="mypost" key={articleId}>
      <span className="date">{convertDate(new Date(createdTime))}</span>
      <p className="content">{title}</p>
    </li>
  );
}

export default MyPost;
