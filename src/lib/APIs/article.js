import CLIENT from './client';

export const getArticleList = async (pageParam, { queryKey }) => {
  console.log(queryKey);

  const data = await CLIENT.get('/article', {
    params: {
      tag: queryKey[2],
      firstPlace: queryKey[3],
      secondPlace: queryKey[4],
      filter: queryKey[5], // priority
      pageNum: pageParam,
    },
  });
  return data;
};
