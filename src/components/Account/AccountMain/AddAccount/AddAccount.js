import './AddAccount.scss';
import { ACCOUNT_LIST } from 'lib/constants/account';
import Modal from '../../../common/Modal/Modal';
import { useAddAccount } from '../../hooks/useAccount';

function AddAccount({ isOpenModal, closeModal, selectDate }) {
  const addAccount = useAddAccount();

  const handleSubmit = event => {
    event.preventDefault();
    // 유효성 검사
    const { value: petId } = event.target.elements.petId;
    const { value: feed } = event.target.elements.feed;
    const { value: toy } = event.target.elements.toy;
    const { value: hospital } = event.target.elements.hospital;
    const { value: beauty } = event.target.elements.beauty;
    const { value: etc } = event.target.elements.etc;
    addAccount({ petId, feed, toy, hospital, beauty, etc, date: selectDate });
    closeModal();
  };

  const inputHtml = Object.entries(ACCOUNT_LIST).map(([key, { name }]) => (
    <div key={key}>
      <span className="label">{name}</span>
      <div className="input-wrapper">
        <input type="text" className="add-input" name={key} />
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
        <form className="add-account-form" onSubmit={handleSubmit}>
          <div>
            <span className="label">펫 선택</span>
            <select name="petId" className="select-wrapper">
              <span>👇</span>
              <option value={Math.random()} className="select-items">
                뽀삐
              </option>
              <option value={Math.random()} className="select-items">
                나비
              </option>
            </select>
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
