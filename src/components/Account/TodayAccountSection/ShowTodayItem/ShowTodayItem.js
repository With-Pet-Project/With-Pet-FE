import styled from 'styled-components';
import { getComma } from 'utils/account';
import './ShowTodayItem.scss';

function ShowTodayItem({ name, price = 0, lightColor, darkColor }) {
  return (
    <li className="today-consumption-item">
      <div className="item-title">
        <ColorSign borderColor={darkColor} bgColor={lightColor} />
        <span className="name">{name}</span>
      </div>
      <div className="today-item-price">
        <span>{getComma(price)}</span>
        <span className="unit">원</span>
      </div>
    </li>
  );
}

export default ShowTodayItem;

const ColorSign = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
`;
