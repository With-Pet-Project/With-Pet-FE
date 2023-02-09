import './TodayAccountItem.scss';

function TodayAccountItem() {
  return (
    <li className="today-consumption-item">
      <div className="item-title">
        <div className="color" />
        <span className="name">사료/간식</span>
      </div>
      <div className="item-price">
        <span>0,000</span>
        <span className="unit">원</span>
      </div>
    </li>
  );
}

export default TodayAccountItem;
