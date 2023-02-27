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

export const postArticle = async (jwt, tag, text, firstPlace, secondPlace) => {
  const data = await CLIENT.post(
    '/article',
    {
      title: '제목',
      tag,
      place1: firstPlace,
      place2: secondPlace,
      detailText: text,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return data;
};
