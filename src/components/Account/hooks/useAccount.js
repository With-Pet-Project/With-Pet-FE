import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { fetchAccount } from 'lib/APIs/account';

const setCalenderFormat = (year, month) => {
  const lastDay = new Date(year, Number(month), 0).getDate();
  const calender = Array(lastDay)
    .fill(null)
    .reduce((acc, _, index) => {
      acc[`${index + 1}`] = {};
      return acc;
    }, {});
  return { ...calender };
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
  const hasData = (data, type) => (data[type] ? data[type] : 0);

  rawData.forEach(data => {
    calender[`${data.day}`] = {
      beauty: hasData(calender[`${data.day}`], 'beauty') + data.beauty,
      etc: hasData(calender[`${data.day}`], 'etc') + data.etc,
      hospital: hasData(calender[`${data.day}`], 'hospital') + data.hospital,
      feed: hasData(calender[`${data.day}`], 'feed') + data.feed,
      toy: hasData(calender[`${data.day}`], 'toy') + data.toy,
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

export const makeAccountData = (rawData, year, month, petsId) => {
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

  // console.log(result);
  return result;
};

export const useAccount = (year, month, petsId) => {
  const fallback = {};

  const { data = fallback } = useQuery([queryKeys.account, year, month], () =>
    fetchAccount(year, month, petsId),
  );

  return data;
};
