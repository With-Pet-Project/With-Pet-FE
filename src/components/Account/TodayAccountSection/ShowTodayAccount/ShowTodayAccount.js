import { getComma } from 'lib/utils/account';
import { ACCOUNT_LIST } from '../../constant';
import ShowTodayItem from '../ShowTodayItem/ShowTodayItem';
import '../TodayAccount.scss';

function ShowTodayAccount({ accountData }) {
  const { consumption } = accountData.length > 0 && accountData[0];

  const getTotal = () => {
    if (accountData.length <= 0) return 0;

    return Object.entries(ACCOUNT_LIST).reduce((acc, [key, _]) => {
      const hasKey = Object.keys(consumption).includes(key);
      if (!hasKey) return acc;
      return acc + consumption[key];
    }, 0);
  };

  const todayAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, darkColor }]) => (
      <ShowTodayItem
        key={key}
        name={name}
        price={accountData.length > 0 ? consumption[key] : 0}
        darkColor={darkColor}
      />
    ),
  );

  return (
    <div className="content-wrapper">
      <div className="today-total">
        <span className="total-title">전체 소비</span>
        <div className="total-price">
          <span className="price">{getComma(getTotal())}</span>
          <span className="unit">원</span>
        </div>
      </div>
      <ul className="today-consumption-list">{todayAccountItemHtml}</ul>
    </div>
  );
}

export default ShowTodayAccount;
