/* eslint-disable no-param-reassign */
import { CLIENT, ACCESS_CLIENT } from './client';
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

  const client = localStorage.getItem('jwt_token') ? ACCESS_CLIENT : CLIENT;

  const data = await client.get(`/articles`, {
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

  const response = await ACCESS_CLIENT.post('/article', {
    title,
    tag,
    place1: firstPlace,
    place2: secondPlace,
    detailText: text,
    images: [...checkUrl],
  });

  return response;
};

export const getReadArticleDetail = async articleId => {
  const response = await CLIENT.get(`/articles/${articleId}`);
  return response;
};

export const patchEditArticle = async (
  title,
  place1,
  place2,
  detailText,
  articleId,
) => {
  const response = await ACCESS_CLIENT.patch(`/article/${articleId}`, {
    title,
    place1,
    place2,
    detailText,
  });

  return response;
};

export const deleteArticle = async articleId => {
  const response = await ACCESS_CLIENT.delete(`article/${articleId}`);

  return response;
};

export const postAddArticleLike = async articleId => {
  const response = await ACCESS_CLIENT.post('/article_like', {
    articleId,
  });

  return response;
};

export const deleteCancelArticlelLike = async articleId => {
  const response = await ACCESS_CLIENT.delete('/article_like', {
    data: {
      articleId,
    },
  });

  return response;
};
