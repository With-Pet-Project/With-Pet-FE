// 검색결과 항목을 Element로 반환하는 함수입니다
export const getListItem = (index, places) => {
  const $li = document.createElement('li');
  $li.className = 'item';

  const itemHTML = `
	<span class="markerbg marker_${index + 1}">
	</span>
	<div class="info" data-cy="hospital-list-item">
		<h5>${places.place_name}</h5>
		${
      places.road_address_name
        ? `<span class="road_address_name">${places.road_address_name}</span><span class="jibun gray">${places.address_name}</span>`
        : `<span>${places.address_name}</span>`
    }
		<span class="tel">${places.phone}</span>
	</div>`;

  $li.innerHTML = itemHTML;

  $li.onclick = () => {
    window.open(places.place_url);
  };

  return $li;
};

export const removeAllChildNods = list => {
  while (list.current.hasChildNodes()) {
    list.current.removeChild(list.current.lastChild);
  }
};
