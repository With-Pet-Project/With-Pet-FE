// 검색결과 항목을 Element로 반환하는 함수입니다

interface Places {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export const getListItem = (index: number, places: Places) => {
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

  $li.onclick = (): void => {
    window.open(places.place_url);
  };

  return $li;
};

export const removeAllChildNods = list => {
  while (list.current.hasChildNodes()) {
    list.current.removeChild(list.current.lastChild);
  }
};
