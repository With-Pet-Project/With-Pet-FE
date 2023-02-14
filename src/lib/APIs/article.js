import CLIENT from './client';

export const getArticleList = async (pageParam, { queryKey }) => {
  const data = await CLIENT.get('/article', {
    params: {
      tag: queryKey[2],
      city: queryKey[3],
      filter: queryKey[4],
      pageNum: pageParam,
    },
  });
  return data;
};
