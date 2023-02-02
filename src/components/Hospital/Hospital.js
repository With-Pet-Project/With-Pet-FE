import { useState } from 'react';
import { ERROR_MESSAGE } from 'constants/errorMessage';
import HospitalMapSection from './HospitalMapSection/HospitalMapSection';
import './Hospital.scss';

function Hospital() {
  const [location, setLocation] = useState(null);
  const { GEOLOCATION: GEOLOCATION_ERROR } = ERROR_MESSAGE;

  const showLocation = ({ coords }) => {
    setLocation([coords.latitude, coords.longitude]);
    console.log(coords.latitude, coords.longitude);
  };

  const showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error(GEOLOCATION_ERROR.PERMISSION_DENIED); // 나중에 좌표 넣어줘서 처리해주기
      case error.POSITION_UNAVAILABLE:
        throw new Error(GEOLOCATION_ERROR.POSITION_UNAVAILABLE);
      case error.TIMEOUT:
        throw new Error(GEOLOCATION_ERROR.POSITION_UNAVAILABLE);
      case error.UNKNOWN_ERROR:
        throw new Error(GEOLOCATION_ERROR.UNKNOWN_ERROR);
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

  return (
    <section className="hospital-section">
      <HospitalMapSection location={location} />
    </section>
  );
}

export default Hospital;
