import { ReactElement } from 'react';
import { getComma } from 'lib/utils/account';
import { ACCOUNT_LIST } from '../../constant';
import ShowTodayItem from '../ShowTodayItem/ShowTodayItem';
import '../TodayAccount.scss';

interface ShowTodayAccountProps {
  data: {
    beauty?: number;
    etc?: number;
    feed?: number;
    hospital?: number;
    toy?: number;
  };
  todayTotal: number;
}

function ShowTodayAccount({
  data,
  todayTotal,
}: ShowTodayAccountProps): ReactElement {
  const hasData = Object.keys(data).length > 0;
  const todayAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, darkColor }]) => (
      <ShowTodayItem
        key={key}
        name={name}
        price={hasData ? data[key] : 0}
        darkColor={darkColor}
      />
    ),
  );

  return (
    <div className="content-wrapper">
      <div className="today-total">
        <span className="total-title">전체 소비</span>
        <div className="total-price">
          <span className="price" data-cy="account-today-total">
            {getComma(todayTotal)}
          </span>
          <span className="unit">원</span>
        </div>
      </div>
      <ul className="today-consumption-list">{todayAccountItemHtml}</ul>
    </div>
  );
}

export default ShowTodayAccount;
