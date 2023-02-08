import { useState, useEffect } from 'react';
import HospitalMapSection from './HospitalMapSection/HospitalMapSection';
import { locationError } from './hooks/location';
import { useKeyword } from './hooks/useKeyword';
import './Hospital.scss';

function Hospital() {
  const [location, setLocation] = useState(null);
  const [mapOption, setMapOption] = useState(null);
  const keyword = useKeyword(location);

  const showLocation = ({ coords }) => {
    setLocation([coords.latitude, coords.longitude]);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(showLocation, locationError);
      } catch (error) {
        console.log(error); // 나중에 분리하기
      }
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
