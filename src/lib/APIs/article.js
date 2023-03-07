/* eslint-disable no-param-reassign */
import CLIENT from './client';
// tag, priority, firstPlace, secondPlace, lastArticleId, 5
export const getArticleList = async (
  tag,
  priority,
  firstPlace,
  secondPlace,
  pageParam,
  searchValue,
  size,
) => {
  if (firstPlace === '지역 선택' || secondPlace === '지역 선택') {
    firstPlace = null;
    secondPlace = null;
  }

  if (tag === 'ALL') {
    tag = null;
  }

  const data = await CLIENT.get(`/articles`, {
    params: {
      tag,
      place1: firstPlace,
      place2: secondPlace,
      filter: priority,
      lastArticleId: pageParam,
      param: searchValue,
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
  const response = await CLIENT.get(`/articles/${articleId}`);
  return response;
};

export const patchEditArticle = async (
  jwt,
  title,
  place1,
  place2,
  detailText,
  articleId,
) => {
  const response = await CLIENT.patch(
    `/article/${articleId}`,
    {
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

export const deleteArticle = async (jwt, articleId) => {
  const response = await CLIENT.delete(`article/${articleId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

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

export const deleteCancelArticlelLike = async (jwt, articleId) => {
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
