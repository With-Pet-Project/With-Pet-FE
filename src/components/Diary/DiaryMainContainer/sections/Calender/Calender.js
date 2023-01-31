import './Calender.scss';

function Calender() {
  return (
    <div className="calender">
      <div className="header">
        <h2>January, 2023</h2>
        <div className="buttons">
          <button type="button">←</button>
          <button type="button">→</button>
        </div>
      </div>
      <div className="body">
        <div className="date">
          <div className="item">Sun</div>
          <div className="item">Mon</div>
          <div className="item">Tue</div>
          <div className="item">Wed</div>
          <div className="item">Thur</div>
          <div className="item">Fri</div>
          <div className="item">Sat</div>
        </div>
        <div className="days">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
          <div className="item">9</div>
          <div className="item">10</div>
          <div className="item">11</div>
          <div className="item">12</div>
          <div className="item">13</div>
          <div className="item">14</div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
