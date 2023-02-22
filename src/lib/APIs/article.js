import CLIENT from './client';

export const getArticleList = async (pageParam, { queryKey }) => {
  let tag = queryKey[2];
  let firstPlace = queryKey[3];
  let secondPlace = queryKey[4];

  if (tag !== 'LOST' && tag !== 'WALK' && tag !== 'HOSPITAL') {
    firstPlace = null;
    secondPlace = null;
  }

  tag = tag === 'ALL' ? null : tag;

  const data = await CLIENT.get('/article', {
    params: {
      tag,
      firstPlace,
      secondPlace,
      filter: queryKey[5], // priority
      pageNum: pageParam,
    },
  });
  return data;
};
