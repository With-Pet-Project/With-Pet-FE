import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import './AccountMain.scss';

function AccountMain() {
  return (
    <section className="account-container">
      <TotalAccountSection />
      <TodayAccountSection />
    </section>
  );
}

export default AccountMain;
