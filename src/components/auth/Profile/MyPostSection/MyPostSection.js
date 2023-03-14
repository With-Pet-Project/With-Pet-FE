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
  // const articleList = [
  //   {
  //     articleId: 1,
  //     content: '첫번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 2,
  //     content: '두번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 3,
  //     content: '세번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 4,
  //     content: '네번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 5,
  //     content: '다섯번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 6,
  //     content: '여섯번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 7,
  //     content: '일곱번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 8,
  //     content: '여덟번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 9,
  //     content: '아홉번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 10,
  //     content: '열번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 11,
  //     content: '열한번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 12,
  //     content: '열두번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 13,
  //     content: '열세번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 14,
  //     content: '열네번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 15,
  //     content: '열다섯번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 16,
  //     content: '열여섯번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 17,
  //     content: '열일곱번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 18,
  //     content: '열어덟번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 19,
  //     content: '열아홉번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 20,
  //     content: '스무번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 21,
  //     content: '스물한번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  //   {
  //     articleId: 22,
  //     content: '스물두번째 게시물',
  //     createdTime: '2023-03-09T09:04:09.853824',
  //   },
  // ];
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
