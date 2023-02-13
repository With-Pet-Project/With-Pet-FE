import { getComma } from 'utils/account';
import { ACCOUNT_LIST } from 'constants/account';
import EditTodayItem from '../EditTodayItem/EditTodayItem';

function EditTodayAccount({ accountData }) {
  const todayAccountItemHtml = Object.entries(ACCOUNT_LIST).map(
    ([key, { name, lightColor, darkColor }]) => (
      <EditTodayItem
        key={key}
        name={name}
        price={accountData.length > 0 ? accountData[0][key] : 0}
        lightColor={lightColor}
        darkColor={darkColor}
      />
    ),
  );

  return (
    <div className="content-wrapper">
      <div className="today-total">
        <span className="total-title">전체 소비</span>
        <div className="total-price">
          {/* <span>{getComma(getTotal())}</span> */}
          <span className="unit">원</span>
        </div>
      </div>
      <ul className="today-consumption-list">{todayAccountItemHtml}</ul>
    </div>
  );
}

export default EditTodayAccount;
