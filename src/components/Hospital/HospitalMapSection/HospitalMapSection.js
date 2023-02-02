/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';
import './HospitalMapSection.scss';
import { ERROR_MESSAGE } from 'constants/errorMessage';

function HospitalMapSection({ keyword, location }) {
  const { kakao } = window;
  const { KAKAO_MAP: KAKAO_MAP_ERROR } = ERROR_MESSAGE;
  const markers = [];
  // let map = null;
  const [map, setMap] = useState(null);
  // null 뜰때 초기에 처리 해주기
  console.log(keyword);

  useEffect(() => {
    if (keyword && location) {
      const [lat, long] = location;
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div - 나중에 useRef로 바꾸기
      const mapOption = {
        center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      setMap(new kakao.maps.Map(mapContainer, mapOption)); // 지도 생성
    }
  }, [location, keyword, kakao.maps.LatLng, kakao.maps.Map]);

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position, idx, title) {
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
    const imageSize = new kakao.maps.Size(36, 37); // 마커 이미지의 크기
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    };

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions,
    );

    const marker = new kakao.maps.Marker({
      position, // 마커의 위치
      image: markerImage,
    });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  }

  // 검색결과 항목을 Element로 반환하는 함수입니다
  // !: 리엑트스럽게 바꾸기
  function getListItem(index, places) {
    const el = document.createElement('li');
    let itemStr = `<span class="markerbg marker_${
      index + 1
    }"></span><div class="info"><h5>${places.place_name}</h5>`;

    if (places.road_address_name) {
      itemStr += `<span>${places.road_address_name}</span><span class="jibun gray">${places.address_name}</span>`;
    } else {
      itemStr += `<span>${places.address_name}</span>`;
    }

    itemStr += `<span class="tel">${places.phone}</span></div>`;

    el.innerHTML = itemStr;
    el.className = 'item';

    el.onclick = function () {
      window.open(places.place_url);
    };
    return el;
  }

  function displayPlaces(places) {
    const listEl = document.getElementById('placesList');
    const menuEl = document.getElementById('menu_wrap');
    const fragment = document.createDocumentFragment();
    const bounds = new kakao.maps.LatLngBounds();
    const listStr = '';

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    // removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    // removeMarker();
    console.log(places);

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
      const marker = addMarker(placePosition, i);
      const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

      console.log(itemEl);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);

      // 마커와 검색결과 항목에 mouseover 했을때
      // 해당 장소에 인포윈도우에 장소명을 표시합니다
      // mouseout 했을 때는 인포윈도우를 닫습니다
      //   (function (marker, title) {
      //     kakao.maps.event.addListener(marker, 'mouseover', function () {
      //       displayInfowindow(marker, title);
      //     });

      //     kakao.maps.event.addListener(marker, 'mouseout', function () {
      //       infowindow.close();
      //     });

      //     itemEl.onmouseover = function () {
      //       displayInfowindow(marker, title);
      //     };

      //     itemEl.onmouseout = function () {
      //       infowindow.close();
      //     };
      //   })(marker, places[i].place_name);

      fragment.appendChild(itemEl);
      // }

      // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
      listEl.appendChild(fragment);
      menuEl.scrollTop = 0;

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  }

  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.ZERO_RESULT)
      throw new Error(KAKAO_MAP_ERROR.ZERO_RESULT);
    if (status === kakao.maps.services.Status.ERROR) {
      throw new Error(KAKAO_MAP_ERROR.ERROR);
    }
    if (status === kakao.maps.services.Status.OK) {
      console.log(data);
      // 정상적으로 검색이 완료됐으면 검색 목록과 마커를 표출합니다
      displayPlaces(data);
      // console.log(pagination);
      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
    }
  }

  if (map) {
    // 지도 있으면 시작
    const ps = new kakao.maps.services.Places(); // 장소 검색 객체를 생성
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }); // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    ps.keywordSearch('동대문구 동물병원', placesSearchCB); // 키워드로 정보 가져오기
  }

  return (
    <div className="map_wrap">
      <div id="map" className="map" />
      <div id="menu_wrap" className="bg_white">
        <hr />
        <ul id="placesList" />
        <div id="pagination" />
      </div>
    </div>
  );
}

export default HospitalMapSection;
