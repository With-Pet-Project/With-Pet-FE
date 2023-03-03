import './MyPostSection.scss';
import { useUser } from '../../hooks/useUser';

function MyPostSection() {
  const { articleList } = useUser();
  const emptyHtml = <p>게시글이 없습니다.</p>;

  return (
    <div className="MyPostSection">
      <h2 className="mypost-title">나의 게시글</h2>
      <ul className="mypost-list">
        {articleList.length === 0
          ? emptyHtml
          : articleList.map(item => (
              <li className="mypost">
                <span className="date">2023년 2월 10일</span>
                <p className="content">
                  오늘은 반려견 산책 올바르게 하는 방법에 대해 알아보려고
                  합니다!
                  <br />
                  우리의 반려견과 산책하기 전에 준비해야 될 것과 알아야 할 것이
                  정말 많은데요.
                </p>
              </li>
            ))}
        {/* 
        <li className="mypost">
          <span className="date">2023년 2월 10일</span>
          <p className="content">
            오늘은 반려견 산책 올바르게 하는 방법에 대해 알아보려고 합니다!
            <br />
            우리의 반려견과 산책하기 전에 준비해야 될 것과 알아야 할 것이 정말
            많은데요.
          </p>
        </li>
        <li className="mypost">
          <span className="date">2023년 2월 10일</span>
          <p className="content">
            오늘은 반려견 산책 올바르게 하는 방법에 대해 알아보려고 합니다!
            <br />
            우리의 반려견과 산책하기 전에 준비해야 될 것과 알아야 할 것이 정말
            많은데요.
          </p>
        </li> */}
      </ul>
    </div>
  );
}

export default MyPostSection;
