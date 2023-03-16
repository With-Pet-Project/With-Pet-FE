import './MyPostSection.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from 'components/auth/hooks/useUser';
import PageNav from './PageNav/PageNav';
import MyPost from './MyPost/MyPost';

const PAGE_PER_SIZE = 4; // 한 페이지에 보여질 게시물 수

function MyPostSection() {
  const { articleList } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const startPost = (currentPage - 1) * PAGE_PER_SIZE; // 시작 게시글 번호
  const endPost = startPost + PAGE_PER_SIZE;

  const changeCurrentPage = newPage => {
    setCurrentPage(prev => newPage);
  };
  const postList = () => {
    const currentPost = articleList.filter(
      (article, index) => index >= startPost && index < endPost,
    );
    return currentPost.map(({ articleId, content, createdTime }) => (
      <Link to={`/community/${articleId}`}>
        <MyPost
          key={articleId}
          currentPage={currentPage}
          articleId={articleId}
          content={content}
          createdTime={createdTime}
        />
      </Link>
    ));
  };

  return (
    <div className="MyPostSection">
      <h2 className="mypost-title">나의 게시글</h2>
      <ul className="mypost-list">{postList()}</ul>
      <PageNav
        currentPage={currentPage}
        postLength={articleList.length}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
}

export default MyPostSection;
