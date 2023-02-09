import './ConsumptionItem.scss';

function ConsumptionItem() {
  return (
    <li className="total-consumption-item">
      <div className="item">
        <span className="name">사료/간식</span>
        <div className="price">
          <span>10,000</span>
          <span className="unit">원</span>
        </div>
      </div>
      <div className="range-wrapper">
        <div className="inner" />
      </div>
    </li>
  );
}

export default ConsumptionItem;
