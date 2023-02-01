import { useState } from 'react';
import { ERROR_MESSAGE } from 'constants/errorMessage';
// chrome://settings/content/location
function Hospital() {
  const [location, setLocation] = useState(null);

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

  return <section>Hospital</section>;
}

export default Hospital;
