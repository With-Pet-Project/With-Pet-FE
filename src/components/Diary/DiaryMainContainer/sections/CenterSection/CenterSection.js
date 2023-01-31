import Calender from '../Calender/Calender';
import Challenge from '../Challenge/Challenge';
import './CenterSection.scss';

function CenterSection() {
  return (
    <section className="diary-center-section">
      <Calender />
      <Challenge />
    </section>
  );
}

export default CenterSection;
