import { useState } from 'react';
import { ERROR_MESSAGE } from 'constants/errorMessage';
import HospitalMapSection from './HospitalMapSection/HospitalMapSection';

// chrome://settings/content/location
function Hospital() {
  const { kakao } = window;
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState(null); // 전역적으로 값을 갖고 싶어서 사용했다. 맞는걸까

  const showLocation = ({ coords }) => {
    setLocation([coords.latitude, coords.longitude]);
    console.log(coords.latitude, coords.longitude);
  };

  const showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error(ERROR_MESSAGE.PERMISSION_DENIED); // 나중에 좌표 넣어줘서 처리해주기
      case error.POSITION_UNAVAILABLE:
        throw new Error(ERROR_MESSAGE.POSITION_UNAVAILABLE);
      case error.TIMEOUT:
        throw new Error(ERROR_MESSAGE.POSITION_UNAVAILABLE);
      case error.UNKNOWN_ERROR:
        throw new Error(ERROR_MESSAGE.UNKNOWN_ERROR);
      default:
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
      } catch (error) {
        console.log(error); // 나중에 분리하기
      }
    }
  };

  if (!location) getLocation();
  if (location) {
    const geocoder = new kakao.maps.services.Geocoder();
    const [lat, long] = location;

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setKeyword(result[0].address.region_3depth_name);
      }
    };

    geocoder.coord2Address(long, lat, callback);
  }

  return (
    <section>
      <HospitalMapSection keyword={keyword} />
    </section>
  );
}

export default Hospital;
