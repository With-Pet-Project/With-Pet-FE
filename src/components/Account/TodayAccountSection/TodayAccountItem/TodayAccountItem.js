import styled from 'styled-components';
import './TodayAccountItem.scss';

function TodayAccountItem({ name, price, color }) {
  return (
    <li className="today-consumption-item">
      <div className="item-title">
        <ColorSign borderColor={color[0]} bgColor={color[1]} />
        <span className="name">{name}</span>
      </div>
      <div className="item-price">
        <span>0,000</span>
        <span className="unit">원</span>
      </div>
    </li>
  );
}

export default TodayAccountItem;

const ColorSign = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
`;
