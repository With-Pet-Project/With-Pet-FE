import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import AddAccount from './AddAccount/AddAccount';
import { useFetchAllAccount } from '../hooks/useAccount';
import './AccountMain.scss';

function AccountMain() {
  const accountData = useFetchAllAccount();
  console.log(accountData);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <section className="account-container">
      <TotalAccountSection accountData={accountData} />
      <TodayAccountSection />
      <button type="button" className="add-account-btn" onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
      <AddAccount isOpenModal={isOpenModal} closeModal={closeModal} />
    </section>
  );
}

export default AccountMain;
