import TodayAccountItem from './TodayAccountItem/TodayAccountItem';
import './TodayAccountSection.scss';

function TodayAccountSection() {
  return (
    <div className="today-account">
      <div className="title-wrapper">
        <h2>오늘의 소비</h2>
        <button type="button">편집</button>
      </div>
      <div className="content-wrapper">
        <div className="today-total">
          <span className="total-title">전체 소비</span>
          <div className="total-price">
            <span>100,000</span>
            <span className="unit">원</span>
          </div>
        </div>
        <ul className="today-consumption-list">
          <TodayAccountItem />
          <TodayAccountItem />
          <TodayAccountItem />
          <TodayAccountItem />
          <TodayAccountItem />
        </ul>
      </div>
    </div>
  );
}
export default TodayAccountSection;
