/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TotalAccountSection from '../TotalAccountSection/TotalAccountSection';
import TodayAccountSection from '../TodayAccountSection/TodayAccountSection';
import Modal from './Modal';
import './AccountMain.scss';

function AccountMain() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
    console.log(isOpenModal);
  };

  return (
    <section className="account-container">
      <TotalAccountSection />
      <TodayAccountSection />
      <button type="button" className="add-account-btn" onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </button>
      <Modal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </section>
  );
}

export default AccountMain;
