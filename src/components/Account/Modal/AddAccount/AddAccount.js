import { useModal } from 'components/common/Modal/context/useModal';
import { usePet } from 'components/Diary/hooks/usePet';
import { useAddAccount } from '../../hooks/useAddAccount';
import { ACCOUNT_LIST } from '../../constant';
import './AddAccount.scss';

function AddAccount({ selectDate }) {
  const addAccount = useAddAccount();
  const pets = usePet();
  const { closeModal } = useModal();

  const handleSubmit = event => {
    event.preventDefault();
    // 유효성 검사
    const { value: petId } = event.target.elements.petId;
    const { value: feed } = event.target.elements.feed;
    const { value: toy } = event.target.elements.toy;
    const { value: hospital } = event.target.elements.hospital;
    const { value: beauty } = event.target.elements.beauty;
    const { value: etc } = event.target.elements.etc;

    const { day, month, year } = selectDate;
    addAccount({
      petId,
      feed,
      toy,
      hospital,
      beauty,
      etc,
      day,
      month,
      year,
    });

    closeModal(AddAccount); // it's not working. but why?
  };

  const petOptions = pets.map(pet => (
    <option value={pet.id} className="select-items">
      {pet.name}
    </option>
  ));

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
    <div className="add-account-modal">
      <header className="add-account-header">
        <h2>오늘의 소비 입력</h2>
        <p>오늘의 소비를 입력해 주세요 !</p>
      </header>
      <form className="add-account-form" onSubmit={handleSubmit}>
        <div>
          <span className="label">펫 선택</span>
          <select name="petId" className="select-wrapper">
            <span>👇</span>
            {petOptions}
          </select>
        </div>
        {inputHtml}
        <div className="button-wrapper">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => closeModal(AddAccount)}
          >
            취소
          </button>
          <button type="submit" className="submit-btn">
            입력완료
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAccount;
