/* eslint-disable camelcase */
import markersImage from 'lib/assets/images/hospital/markers.png';

const { kakao } = window;
export const markers: any[] = [];

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
export const addMarker = (position, idx, map) => {
  const imageSrc = markersImage; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  const imageSize = new kakao.maps.Size(40, 41); // 마커 이미지의 크기
  const imgOptions = {
    spriteSize: new kakao.maps.Size(60, 691), // 스프라이트 이미지의 크기
    spriteOrigin: new kakao.maps.Point(0, idx * 44 + 14), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    offset: new kakao.maps.Point(25, 40), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
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
};

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
export const removeMarker = () => {
  markers.forEach(marker => {
    marker.setMap(null);
  });
  markers.splice(0, markers.length);
};

export const addEventMarker = (marker, overlay, map) => {
  // 지도 안 마커 이벤트 세팅
  kakao.maps.event.addListener(marker, 'mouseover', () => {
    overlay.setMap(map);
  });

  kakao.maps.event.addListener(marker, 'mouseout', () => {
    overlay.setMap(null);
  });
};
