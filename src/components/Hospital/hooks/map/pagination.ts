// @ts-nocheck

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
export const displayPagination = (pagination, paginationContainer = []) => {
  console.log(paginationContainer);
  const $pagination = paginationContainer.current;
  const $fragment = document.createDocumentFragment();
  // 기존에 추가된 페이지번호를 삭제합니다
  while ($pagination.hasChildNodes()) {
    $pagination.removeChild($pagination.lastChild);
  }

  const pages = Array(pagination.last).fill(null);

  pages.forEach((page, index) => {
    const $a = document.createElement('a');
    $a.href = '#';
    $a.innerHTML = `${index + 1}`;

    if (index + 1 === pagination.current) {
      $a.className = 'on';
    } else {
      $a.onclick = () => {
        pagination.gotoPage(index + 1);
      };
    }

    $fragment.appendChild($a);
  });

  $pagination.appendChild($fragment);
};
