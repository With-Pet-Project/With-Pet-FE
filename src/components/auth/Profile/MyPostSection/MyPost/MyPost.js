const PAGE_PER_SIZE = 4; // 한 페이지에 보여질 게시물 수

function MyPost({ articleId, content, createdTime }) {
  const emptyHtml = <p>게시글이 없습니다.</p>;

  const convertDate = date =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <li className="mypost" key={articleId}>
      <span className="date">{convertDate(new Date(createdTime))}</span>
      <p className="content">{content}</p>
    </li>
  );
}

export default MyPost;
