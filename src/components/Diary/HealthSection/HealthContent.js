import './HealthContent.scss';

function HealthContent({ category, text, value, unit, image = null }) {
  return (
    <div className="Health-category">
      <div className="Health-category-text">
        <h3>{category}</h3>
        <p>{text}</p>
        <div>
          <em>{value} </em>
          <span>{unit}</span>
        </div>
      </div>
      <div className="Health-category-img" />
    </div>
  );
}

export default HealthContent;
