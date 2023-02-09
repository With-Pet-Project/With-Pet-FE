/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import './AccountMain.scss';

function AccountMain() {
  return (
    <section className="account-container">
      <TotalAccountSection />
      <TodayAccountSection />
      <button type="button" className="add-account-btn">
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
    </section>
  );
}

export default AccountMain;
