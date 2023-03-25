import './MyPostSection.scss';
import { Link } from 'react-router-dom';
import { useState, ReactElement } from 'react';
import { useUser } from 'components/auth/hooks/useUser';
import PageNav from './PageNav/PageNav';
import MyPost from './MyPost/MyPost';
import { PAGE_PER_SIZE } from '../../constant';

function MyPostSection(): ReactElement {
  const { articleList } = useUser();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startPost = (currentPage - 1) * PAGE_PER_SIZE;
  const endPost = startPost + PAGE_PER_SIZE;
  const hasPost = Object.keys(articleList).length > 0;
  const emptyPostHtml = <p>게시글이 없습니다.</p>;

  const changeCurrentPage = (newPage: number) => {
    setCurrentPage(prev => newPage);
  };
  const postList = (): ReactElement => {
    if (!hasPost) return emptyPostHtml;
    const currentPost = articleList.filter(
      (article, index: number) => index >= startPost && index < endPost,
    );

    return currentPost.map(({ articleId, title, createdTime }) => (
      <Link to={`/community/${articleId}`}>
        <MyPost
          key={articleId}
          articleId={articleId}
          title={title}
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
