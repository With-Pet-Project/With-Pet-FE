/* eslint-disable no-param-reassign */
import { getComma } from 'lib/utils/account';
import { ACCOUNT_LIST } from '../../constant';
import EditTodayItem from '../EditTodayItem/EditTodayItem';
import './EditTodayAccount.scss';
import '../TodayAccount.scss';

function EditTodayAccount({ accountData, accountValue, todayTotal }) {
  console.log(accountData);
  console.log(accountValue);
  const onChange = (event, type) => {
    const { value } = event.target;
    accountValue[type] = Number(value);
  };

  const hasData = Object.keys(accountData).length > 0;

  const todayAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, darkColor }]) => (
      <EditTodayItem
        key={key}
        id={key}
        name={name}
        price={hasData ? accountData[key] : 0}
        darkColor={darkColor}
        onChange={onChange}
      />
    ),
  );

  return (
    <div className="content-wrapper">
      <div className="today-total">
        <span className="total-title">전체 소비</span>
        <div className="total-price">
          <span className="price">{getComma(todayTotal)}</span>
          <span className="unit">원</span>
        </div>
      </div>
      <form className="edit-account-form">
        <ul className="today-consumption-list">{todayAccountItemHtml}</ul>
      </form>
    </div>
  );
}

export default EditTodayAccount;
