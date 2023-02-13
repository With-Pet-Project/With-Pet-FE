import styled from 'styled-components';
import { getComma } from 'utils/account';
import './EditTodayItem.scss';

function EditTodayItem({ name, price = 0, lightColor, darkColor }) {
  return (
    <li className="today-account-edit-item">
      <div className="item-title">
        <ColorSign borderColor={darkColor} bgColor={lightColor} />
        <span className="name">{name}</span>
      </div>
      <div className="today-item-price">
        <input className="today-input" placeholder="0,000" />
        <span className="unit">원</span>
      </div>
    </li>
  );
}

export default EditTodayItem;

const ColorSign = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
`;
