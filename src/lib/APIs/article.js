import CLIENT from './client';

export const getArticleList = async (pageParam, tag, city, filter = null) => {
  const response = await CLIENT.get('/article', {
    params: {
      tag,
      filter,
      pageNum: pageParam,
      city,
    },
  });
  return response;
};
