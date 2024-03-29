import { useState } from 'react';

const { kakao } = window;

type Result = {
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
};

export const useKeyword = location => {
  const [keyword, setKeyword] = useState<string | null>(null);

  if (location) {
    const geocoder = new kakao.maps.services.Geocoder();
    const [lat, long] = location;

    const callback = (result: Result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { address } = result[0];
        setKeyword(
          `${address.region_1depth_name} ${address.region_2depth_name} ${address.region_3depth_name} 동물병원`,
        );
      }
    };

    geocoder.coord2Address(long, lat, callback);
  }

  return keyword;
};
