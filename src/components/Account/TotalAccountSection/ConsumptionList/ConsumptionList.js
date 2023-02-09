import './ConsumptionList.scss';

function ConsumptionList() {
  return (
    <div className="consumption-list">
      <div className="item">
        <span className="name">사료/간식</span>
        <span className="price">10,000원</span>
      </div>
      <div className="range-wrapper">
        <div className="inner" />
      </div>
    </div>
  );
}

export default ConsumptionList;
