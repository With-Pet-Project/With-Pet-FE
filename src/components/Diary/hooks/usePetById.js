/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';
import { usePet } from './usePet';
import { petIdContext } from '../context/PetContext';

export function usePetById() {
  // 개별 펫의 정보를 얻기 위해 server에 요청을 한번 더 보내는 것보다
  // 로컬에서 query cache에 있는 값을 찾아오는게 이득
  const [petId, setPetId] = useContext(petIdContext);
  const [petInfo, setPetInfo] = useState();
  const petInfoList = usePet();

  useEffect(() => {
    setPetInfo(petInfoList?.find(pet => pet.id === petId));
  }, [petId, petInfoList]);

  return petInfo || null;
}
