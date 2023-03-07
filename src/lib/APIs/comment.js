import CLIENT from './client';

export const postCreateComment = async (
  jwt,
  articleId,
  content,
  commentId = null,
) => {
  const response = await CLIENT.post(
    '/comment',
    {
      articleId,
      content,
      commentId,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const getReadComment = async (lastCommentId, articleId, size) => {
  const response = await CLIENT.get(
    `/comments?lastCommentId=${lastCommentId}&articleId=${articleId}&size=${size}`,
  );

  return response;
};

export const getReadChildComment = async commentId => {
  const response = await CLIENT.get(`/comments/${commentId}`);
  return response;
};

export const patchUpdateComment = async (jwt, commentId, content) => {
  const response = await CLIENT.patch(
    `/comment/${commentId}?content=${content}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  );

  return response;
};

export const deleteComment = async (jwt, commentId) => {
  const response = await CLIENT.delete(`/comment/${commentId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};
