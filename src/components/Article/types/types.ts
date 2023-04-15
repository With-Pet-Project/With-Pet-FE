export interface ReplyType {
  createdTime: Date;
  profileImg?: string | null;
  nickName: string;
  content: string;
}

export interface CommentType {
  commentId: number;
  createdTime: Date;
  modifiedTime?: Date;
  profileImg: string;
  nickName: string;
  content: string;
}
