import styled from 'styled-components';
import './TotalAccountItem.scss';
import { getComma } from 'utils/account';

function TotalAccountItem({ name, price, percent, color }) {
  return (
    <li className="total-consumption-item">
      <div className="item">
        <span className="name">{name}</span>
        <div className="price">
          <span>{getComma(price)}</span>
          <span className="unit">원</span>
        </div>
      </div>
      <div className="range-wrapper">
        <RangeBar color={color} percent={percent} className="inner" />
      </div>
    </li>
  );
}

export default TotalAccountItem;

const RangeBar = styled.div`
  height: 100%;
  width: 0%;
  width: ${props => `${props.percent}%`};
  background-color: ${props => props.color};
  border-radius: inherit;
`;
