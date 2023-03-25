import { ReactElement } from 'react';
import styled from 'styled-components';
import './TotalAccountItem.scss';
import { getComma } from 'lib/utils/account';

interface TotalAccountItemProps {
  name: string;
  price: number;
  percent: number;
  color: string;
}

function TotalAccountItem({
  name,
  price,
  percent,
  color,
}: TotalAccountItemProps): ReactElement {
  return (
    <li className="total-consumption-item">
      <div className="item">
        <span className="name">{name}</span>
        <div className="price">
          <span className="number" data-cy="account-monthly-item">
            {getComma(price)}
          </span>
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
  transition: width 0.5s;
`;
