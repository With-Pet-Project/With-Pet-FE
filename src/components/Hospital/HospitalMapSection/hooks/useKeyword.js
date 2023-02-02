import { useState } from 'react';

const { kakao } = window;

export const useKeyword = location => {
  const [keyword, setKeyword] = useState(null);

  if (location) {
    const geocoder = new kakao.maps.services.Geocoder();
    const [lat, long] = location;

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { address } = result[0];
        setKeyword(
          `${address.region_1depth_name} ${address.region_2depth_name} ${address.region_3depth_name}`,
        );
      }
    };

    geocoder.coord2Address(long, lat, callback);
  }

  return keyword;
};
