export interface YearMonth {
  dateObject: Date;
  dateTime: string;
  firstDayOfWeek: number;
  lastDay: number;
  monthName: string;
  year: string;
  month: string;
  day: string;
}

export interface AccountTotal {
  beauty: number;
  etc: number;
  feed: number;
  hospital: number;
  toy: number;
  total: number;
}

export interface AccountCalender {
  id?: number;
  petId?: number;
  day?: number;
  beauty?: number;
  etc?: number;
  feed?: number;
  hospital?: number;
  toy?: number;
}

export interface SelectPetProps {
  id: number | string;
  name: string;
}

export interface AccountDataItem {
  calender?: {
    [key: number]: AccountCalender;
  };
  total?: AccountTotal;
}

export type AccountDataItems = {
  all: AccountDataItem;
  [key: number]: AccountDataItem;
};

export interface Pet {
  birthday: string;
  id: number;
  initWeight: number;
  name: string;
}
// export type AccountDataItems = { [key: number]: AccountDataItem };

export type Article = {
  articleId: number;
  profileImg: string;
  nickName: string;
  title: string;
  createdTime: Date;
  modifiedTime: Date;
  detailText: string;
  likeCnt: number;
  commentCnt: number;
  tag: string;
  whetherLike: boolean;
};

export interface ArticlePage {
  hasNext: boolean;
  lastArticleId: number;
  viewArticleListDto: Article[];
}
