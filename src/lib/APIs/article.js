/* eslint-disable no-param-reassign */
import CLIENT from './client';
// tag, priority, firstPlace, secondPlace, lastArticleId, 5
export const getArticleList = async (
  tag,
  priority,
  firstPlace,
  secondPlace,
  lastArticleId,
  size,
) => {
  if (firstPlace === '지역 선택' || secondPlace === '지역 선택') {
    firstPlace = null;
    secondPlace = null;
  }
  console.log(lastArticleId);
  if (tag === 'ALL') {
    tag = null;
  }
  const data = await CLIENT.get(`/articles`, {
    params: {
      tag,
      place1: firstPlace,
      place2: secondPlace,
      filter: priority,
      lastArticleId,
      size,
    },
  });
  return data;
};

export const postCreateArticle = async (
  jwt,
  title,
  tag,
  text,
  firstPlace,
  secondPlace,
  checkUrl,
) => {
  if (firstPlace === '지역 선택' || secondPlace === '지역 선택') {
    firstPlace = null;
    secondPlace = null;
  }

  const response = await CLIENT.post(
    '/article',
    {
      title,
      tag,
      place1: firstPlace,
      place2: secondPlace,
      detailText: text,
      images: [...checkUrl],
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const getReadArticleDetail = async articleId => {
  const response = await CLIENT.get(`/article/${articleId}`);

  return response;
};

export const patchEditArticle = async (
  jwt,
  tag,
  title,
  place1,
  place2,
  detailText,
  articleId,
) => {
  if (tag !== 'LOST' && tag !== 'WALK' && tag !== 'HOSPITAL') {
    place1 = null;
    place2 = null;
  }
  const response = await CLIENT.patch(
    `/article/${articleId}`,
    {
      tag,
      title,
      place1,
      place2,
      detailText,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const postAddArticleLike = async (jwt, articleId) => {
  const response = await CLIENT.post(
    '/article_like',
    {
      articleId,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const deleteCanceArticlelLike = async (jwt, articleId) => {
  const response = await CLIENT.delete('/article_like', {
    data: {
      articleId,
    },
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};
