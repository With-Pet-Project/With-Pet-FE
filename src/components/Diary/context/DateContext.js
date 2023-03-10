import { createContext, useState, useMemo } from 'react';
import { getMonthYearDetails } from 'components/common/Calender/hooks/date';
import { TODAY } from 'components/common/Calender/constant';

export const dateContext = createContext();

export function DateProvider({ children }) {
  // selectDate.dateTime => YYYY-MM-DD
  const [selectDate, setSelectDate] = useState(getMonthYearDetails(TODAY));

  const value = useMemo(() => [selectDate, setSelectDate], [selectDate]);
  return <dateContext.Provider value={value}>{children}</dateContext.Provider>;
}
