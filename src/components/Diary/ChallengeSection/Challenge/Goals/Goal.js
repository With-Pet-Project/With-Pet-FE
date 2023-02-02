import './Goal.scss';

function Goal({ goal }) {
  return (
    <div className="goal-item">
      <input type="checkbox" />
      <div className="goal-item-title">
        <h2>{goal.title}</h2>
        <p>주 {goal.times}회 달성 목표</p>
      </div>
    </div>
  );
}

export default Goal;
