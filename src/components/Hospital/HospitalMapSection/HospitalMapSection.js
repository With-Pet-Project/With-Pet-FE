/* eslint-disable camelcase */
import { useEffect, useState, useRef } from 'react';
import './HospitalMapSection.scss';
import { ERROR_MESSAGE } from 'constants/errorMessage';
import { useKeyword } from './hooks/useKeyword';
import { displayInfowindow } from './map/infoWindow';
import { addMarker, removeMarker, addEventMarker } from './map/marker';
import { getListItem, removeAllChildNods } from './map/list';
import { displayPagination } from './map/pagination';

function HospitalMapSection({ location }) {
  const keyword = useKeyword(location);
  const [map, setMap] = useState(null);
  const list = useRef(null);
  const menu = useRef(null);
  const paginationContainer = useRef(null);
  const mapContainer = useRef(null);
  const { kakao } = window;
  const { KAKAO_MAP: KAKAO_MAP_ERROR } = ERROR_MESSAGE;
  let infowindow; // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다

  useEffect(() => {
    if (keyword) {
      const [lat, long] = location;
      const mapOption = {
        center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      setMap(new kakao.maps.Map(mapContainer.current, mapOption)); // 지도 생성
    }
  }, [location, keyword, kakao.maps.LatLng, kakao.maps.Map]);

  const displayPlaces = places => {
    const fragment = document.createDocumentFragment();
    const bounds = new kakao.maps.LatLngBounds();

    removeAllChildNods(list); // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeMarker(); // 지도에 표시되고 있는 마커를 제거합니다

    places.forEach((place, index) => {
      // 마커를 생성하고 지도에 표시합니다
      const { x, y, place_name } = place;
      const placePosition = new kakao.maps.LatLng(y, x);
      const marker = addMarker(placePosition, index, map); // 마커 설정
      bounds.extend(placePosition); // position을 지정
      const itemEl = getListItem(index, place); // 검색 결과 항목 Element를 생성합니다
      addEventMarker(marker, place_name, infowindow, map);
      // 목록 아이템 마우스 이벤트

      itemEl.onmouseout = () => {
        infowindow.close();
      };
      itemEl.onmouseover = () => {
        displayInfowindow(infowindow, marker, place_name, map); // 인포 윈도우 보이기 설정
      };

      fragment.appendChild(itemEl);
    });

    list.current.appendChild(fragment);
    menu.current.scrollTop = 0;
    map.setBounds(bounds); // 지도 위치 지정
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.ZERO_RESULT)
      throw new Error(KAKAO_MAP_ERROR.ZERO_RESULT);
    if (status === kakao.maps.services.Status.ERROR) {
      throw new Error(KAKAO_MAP_ERROR.ERROR);
    }

    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면 검색 목록과 마커를 표출합니다
      displayPlaces(data);
      // 페이지 번호를 표출합니다
      displayPagination(pagination, paginationContainer);
    }
  };

  if (map) {
    const ps = new kakao.maps.services.Places(); // 장소 검색 객체를 생성
    infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    ps.keywordSearch(`${keyword} 동물병원`, placesSearchCB); // 키워드로 정보 검색
  }

  return (
    <div className="map_wrap">
      <div id="map" className="map" ref={mapContainer} />
      <div id="menu_wrap" className="bg_white" ref={menu}>
        <ul id="placesList" ref={list} />
        <div id="pagination" ref={paginationContainer} />
      </div>
    </div>
  );
}
export default HospitalMapSection;
