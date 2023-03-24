export interface YearMonth {
  dateObject: Date;
  dateTime: string;
  day: string;
  firstDayOfWeek: number;
  lastDay: number;
  month: string;
  monthName: string;
  year: string;
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
  beauty?: number;
  day?: number;
  etc?: number;
  feed?: number;
  hospital?: number;
  id?: number;
  petId?: number;
  toy?: number;
}

interface AccountDataItem {
  calender: {
    [key: number]: AccountCalender;
  };
  total: AccountTotal;
}

export type AccountDataItems = { [key: string]: AccountDataItem };
