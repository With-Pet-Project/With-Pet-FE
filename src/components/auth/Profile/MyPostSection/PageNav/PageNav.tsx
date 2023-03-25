/* eslint-disable consistent-return */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { PAGE_PER_SIZE, NAV_ITEM_SIZE } from '../../../constant';

interface PageNavProps {
  currentPage: number;
  postLength: number;
  changeCurrentPage: (newPage: number) => void;
}

function PageNav({ currentPage, postLength, changeCurrentPage }: PageNavProps) {
  const currentSet = Math.ceil(currentPage / NAV_ITEM_SIZE); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * NAV_ITEM_SIZE + 1; // 시작 페이지 번호
  const totalPage = Math.ceil(postLength / PAGE_PER_SIZE); // 전체 페이지 수
  const totalSet = Math.ceil(totalPage / NAV_ITEM_SIZE); // 전체 세트 수
  const endPage = startPage + NAV_ITEM_SIZE - 1; // 끝 페이지 번호
  const showPrevBtn = startPage > 1;
  const showNextBtn = currentSet < totalSet;

  const pagingList = Array.from(Array(NAV_ITEM_SIZE), (_, index) => {
    if (startPage + index <= totalPage) return startPage + index;
  });

  const handleOnClick = (event: React.SyntheticEvent): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const { paging } = event.target.dataset;
    if (!paging) return;
    let nextPage = Number(paging);
    if (paging === 'prev') nextPage = startPage - 1;
    if (paging === 'next') nextPage = endPage + 1;
    changeCurrentPage(nextPage);
  };

  return (
    <ol className="pagination" onClick={handleOnClick}>
      {showPrevBtn && (
        <li key="prev" data-paging="prev">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon"
            data-paging="prev"
          />
        </li>
      )}
      {pagingList.map(
        item =>
          item && (
            <li
              key={item}
              className={Number(currentPage) === Number(item) ? 'active' : ''}
              data-paging={item}
            >
              {item}
            </li>
          ),
      )}
      {showNextBtn && (
        <li key="next" data-paging="next">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon"
            data-paging="next"
          />
        </li>
      )}
    </ol>
  );
}

export default PageNav;
