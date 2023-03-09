import { CLIENT, ACCESS_CLIENT } from './client';

export const postCreateComment = async (
  articleId,
  content,
  commentId = null,
) => {
  const response = await ACCESS_CLIENT.post('/comment', {
    articleId,
    content,
    commentId,
  });

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

export const patchUpdateComment = async (commentId, content) => {
  const response = await ACCESS_CLIENT.patch(
    `/comment/${commentId}?content=${content}`,
  );

  return response;
};

export const deleteComment = async commentId => {
  const response = await ACCESS_CLIENT.delete(`/comment/${commentId}`);

  return response;
};
