import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { ACCESS_CLIENT } from 'lib/APIs/client';

const setCalenderFormat = (year, month) => {
  const lastDay = new Date(year, Number(month), 0).getDate();
  return Array(lastDay)
    .fill(null)
    .reduce((acc, _, index) => {
      acc[`${index + 1}`] = {};
      return acc;
    }, {});
};

const getCalender = (year, month, rawData, petId) => {
  const calender = setCalenderFormat(year, month);

  rawData.forEach(data => {
    if (data.petId !== petId) return;
    calender[`${data.day}`] = { ...calender[`${data.day}`], ...data };
  });

  return calender;
};

const getAllCalender = (year, month, rawData) => {
  const calender = setCalenderFormat(year, month);

  rawData.forEach(data => {
    calender[`${data.day}`] = {
      beauty: calender[`${data.day}`].beauty || 0 + data.beauty,
      etc: calender[`${data.day}`].etc || 0 + data.etc,
      hospital: calender[`${data.day}`].hospital || 0 + data.hospital,
      feed: calender[`${data.day}`].feed || 0 + data.feed,
      toy: calender[`${data.day}`].toy || 0 + data.toy,
    };
  });

  return calender;
};

const getTotal = (rawData, petId, isAllData) => {
  const initialJson = {
    beauty: 0,
    etc: 0,
    hospital: 0,
    feed: 0,
    toy: 0,
  };

  const result = rawData.reduce((acc, data) => {
    if (!isAllData && data.petId !== petId) return acc;
    return {
      ...acc,
      beauty: acc.beauty + data.beauty,
      etc: acc.etc + data.etc,
      hospital: acc.hospital + data.hospital,
      feed: acc.feed + data.feed,
      toy: acc.toy + data.toy,
    };
  }, initialJson);

  return {
    ...result,
    total:
      result.beauty + result.etc + result.hospital + result.feed + result.toy,
  };
};

const makeAccountData = (rawData, year, month, petsId) => {
  const result = {};

  petsId.forEach(petId => {
    const calender = getCalender(year, month, rawData, petId);
    const AllCalender = getAllCalender(year, month, rawData, petId);
    const total = getTotal(rawData, petId, false);
    const allTotal = getTotal(rawData, petId, true);

    result[petId] = { calender };
    result[petId].total = { ...total };
    result.all = { calender: AllCalender };
    result.all.total = { ...allTotal };
  });

  console.log(result);
  return result;
};

export const fetchAccount = async (year, month, petsId) => {
  // const jwt = localStorage.getItem('jwt_token') || null;
  const url = `/pet/consumption?year=${year}&month=${month}`;

  const { data } = await ACCESS_CLIENT.get(url);

  console.log(JSON.stringify(data.data, null, '\t'));
  const result = makeAccountData(data.data, year, month, petsId);
  // console.log(JSON.stringify(result, null, '\t'));
  return result;
};

export const useAccount = (year, month, petsId) => {
  const fallback = {};

  const { data = fallback } = useQuery([queryKeys.account, year, month], () =>
    fetchAccount(year, month, petsId),
  );

  return data;
};
