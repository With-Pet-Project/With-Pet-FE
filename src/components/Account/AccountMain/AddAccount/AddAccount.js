import './AddAccount.scss';
import Modal from '../../../common/Modal/Modal';

function AddAccount({ isOpenModal, closeModal }) {
  return (
    isOpenModal && (
      <Modal closeModal={closeModal}>
        <header className="add-account-header">
          <h2>오늘의 소비 입력</h2>
          <p>오늘의 소비를 입력해 주세요 !</p>
        </header>
        <form className="add-account-form">
          <span className="label">사료/간식</span>
          <div className="input-wrapper">
            <input type="text" id="food" />
            <span className="unit">원</span>
          </div>
          <span className="label">사료/간식</span>
          <div className="input-wrapper">
            <input type="text" id="food" />
            <span className="unit">원</span>
          </div>
          <span className="label">사료/간식</span>
          <div className="input-wrapper">
            <input type="text" id="food" />
            <span className="unit">원</span>
          </div>
          <span className="label">사료/간식</span>
          <div className="input-wrapper">
            <input type="text" id="food" />
            <span className="unit">원</span>
          </div>
          <span className="label">사료/간식</span>
          <div className="input-wrapper">
            <input type="text" id="food" />
            <span className="unit">원</span>
          </div>
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
