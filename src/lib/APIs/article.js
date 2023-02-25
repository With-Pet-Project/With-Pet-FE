/* eslint-disable no-param-reassign */
import CLIENT from './client';

export const getArticleList = async (
  pageParam,
  tag,
  firstPlace,
  secondPlace,
  criteria,
) => {
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
      filter: criteria,
      pageNum: pageParam,
    },
  });
  return data;
};
