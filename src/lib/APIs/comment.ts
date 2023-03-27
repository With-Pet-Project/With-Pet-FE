import CLIENT from './client';

export const postCreateComment = async (
  jwt: string,
  articleId: number,
  content: string,
  commentId: number,
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

export const getReadComment = async (
  lastCommentId: number,
  articleId: number,
  size: number,
) => {
  const response = await CLIENT.get(
    `/comments?lastCommentId=${lastCommentId}&articleId=${articleId}&size=${size}`,
  );

  return response;
};

export const getReadChildComment = async (commentId: number) => {
  const response = await CLIENT.get(`/comments/${commentId}`);
  return response;
};

export const patchUpdateComment = async (
  jwt: string,
  commentId: number,
  content: string,
) => {
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

export const deleteComment = async (jwt: string, commentId: number) => {
  const response = await CLIENT.delete(`/comment/${commentId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return response;
};

export const getReadReplies = async (commentId: number) => {
  const response = await CLIENT.get(`/comments/${commentId}`);

  return response;
};
