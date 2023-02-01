import { useState } from 'react';
// chrome://settings/content/location
function Hospital() {
  const [coords, setCoords] = useState([null, null]);

  const getLocation = () => {};

  if (!coords) {
    getLocation();
  }

  return <section>Hospital</section>;
}

export default Hospital;
