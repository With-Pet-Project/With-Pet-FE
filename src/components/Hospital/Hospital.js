/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { ERROR_MESSAGE } from 'lib/constants/errorMessage';
import { DEFAULT_LOCATION } from './constant';
import HospitalMapSection from './HospitalMapSection/HospitalMapSection';
import { useKeyword } from './hooks/useKeyword';
import './Hospital.scss';

function Hospital() {
  const [location, setLocation] = useState(null);
  const [mapOption, setMapOption] = useState(null);
  const keyword = useKeyword(location);
  const { GEOLOCATION: GEOLOCATION_ERROR } = ERROR_MESSAGE;

  const showLocation = ({ coords }) => {
    setLocation([coords.latitude, coords.longitude]);
  };

  const locationError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocation(DEFAULT_LOCATION);
        return;
      case error.POSITION_UNAVAILABLE:
        throw new Error(GEOLOCATION_ERROR.POSITION_UNAVAILABLE);
      case error.TIMEOUT:
        throw new Error(GEOLOCATION_ERROR.TIMEOUT);
      case error.UNKNOWN_ERROR:
        throw new Error(GEOLOCATION_ERROR.UNKNOWN_ERROR);
      default:
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation, locationError);
    }
  }, []);

  return (
    <section className="hospital-section">
      <HospitalMapSection
        location={location}
        keyword={keyword}
        mapOption={mapOption}
        setLocation={setLocation}
        setMapOption={setMapOption}
      />
    </section>
  );
}

export default Hospital;
