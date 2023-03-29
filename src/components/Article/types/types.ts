export type ReplyType = {
  createdTime: Date;
  profileImg?: string | null;
  nickName: string;
  content: string;
};

export type CommentType = {
  commentId: number;
  createdTime: Date;
  profileImg: string;
  nickName: string;
  content: string;
};
