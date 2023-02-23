/* eslint-disable no-param-reassign */
import { getComma } from 'lib/utils/account';
import { ACCOUNT_LIST } from '../../constant';
import EditTodayItem from '../EditTodayItem/EditTodayItem';
import './EditTodayAccount.scss';

function EditTodayAccount({ accountData, accountValue }) {
  const onChange = (event, type) => {
    const { value } = event.target;
    accountValue[type] = Number(value);
  };

  const getTotal = () => {
    if (accountData.length <= 0) return 0;

    return Object.entries(ACCOUNT_LIST).reduce((acc, [key, _]) => {
      const hasKey = Object.keys(accountData[0]).includes(key);
      if (!hasKey) return acc;
      return acc + accountData[0][key];
    }, 0);
  };

  const todayAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, lightColor, darkColor }]) => (
      <EditTodayItem
        key={key}
        id={key}
        name={name}
        price={accountData.length > 0 ? accountData[0][key] : 0}
        lightColor={lightColor}
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
          <span>{getComma(getTotal())}</span>
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
