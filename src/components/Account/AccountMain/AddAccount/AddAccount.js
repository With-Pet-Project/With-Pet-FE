import './AddAccount.scss';
import { ACCOUNT_LIST } from 'constants/account';
import Modal from '../../../common/Modal/Modal';

function AddAccount({ isOpenModal, closeModal }) {
  const inputHtml = Object.entries(ACCOUNT_LIST).map(([key, { name }]) => (
    <div key={key}>
      <span className="label">{name}</span>
      <div className="input-wrapper">
        <input type="text" />
        <span className="unit">원</span>
      </div>
    </div>
  ));

  return (
    isOpenModal && (
      <Modal closeModal={closeModal} className="add-account-modal">
        <header className="add-account-header">
          <h2>오늘의 소비 입력</h2>
          <p>오늘의 소비를 입력해 주세요 !</p>
        </header>
        <form className="add-account-form">
          <div>
            <span className="label">펫 선택</span>
            <div className="input-wrapper">
              <input type="text" />
            </div>
          </div>
          {inputHtml}
          <div className="button-wrapper">
            <button type="button" className="cancel-btn" onClick={closeModal}>
              취소
            </button>
            <button type="submit" className="submit-btn">
              입력완료
            </button>
          </div>
        </form>
      </Modal>
    )
  );
}

export default AddAccount;
