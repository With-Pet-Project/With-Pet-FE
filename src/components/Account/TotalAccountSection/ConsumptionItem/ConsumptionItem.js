import './ConsumptionItem.scss';

function ConsumptionItem() {
  return (
    <li className="total-consumption-item">
      <div className="item">
        <span className="name">사료/간식</span>
        <span className="price">10,000원</span>
      </div>
      <div className="range-wrapper">
        <div className="inner" />
      </div>
    </li>
  );
}

export default ConsumptionItem;
