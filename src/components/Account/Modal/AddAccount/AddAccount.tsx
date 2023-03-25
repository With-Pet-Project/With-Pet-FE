import { useState, ReactElement } from 'react';
import { useModal } from 'components/common/Modal/context/useModal';
import { usePet } from 'components/Diary/hooks/usePet';
import { useAddAccount } from '../../hooks/useAddAccount';
import { useUpdateAccount } from '../../hooks/useUpdateAccount';
import { ACCOUNT_LIST } from '../../constant';
import './AddAccount.scss';

function AddAccount({ selectDate, accountData }): ReactElement {
  const pets = usePet();
  const [selectPetId, setSelectPetId] = useState(pets[0].id);
  const addAccount = useAddAccount();
  const updateAccount = useUpdateAccount();
  const { closeModal } = useModal();
  const selectedPetValue = accountData[selectPetId].calender[selectDate.day];
  const updateData = { ...selectedPetValue };

  const handleSubmit = event => {
    event.preventDefault();
    const { value: petId } = event.target.elements.petId;
    const { value: feed } = event.target.elements.feed;
    const { value: toy } = event.target.elements.toy;
    const { value: hospital } = event.target.elements.hospital;
    const { value: beauty } = event.target.elements.beauty;
    const { value: etc } = event.target.elements.etc;
    const { day, month, year } = selectDate;
    const hasPetValue = Object.keys(selectedPetValue).length > 0;

    if (hasPetValue) {
      updateAccount({
        ...updateData,
        year: Number(year),
        month: Number(month),
        week: 1,
        petId: selectPetId,
      });

      closeModal(AddAccount);
      return;
    }

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

    closeModal(AddAccount);
  };

  const selectOnChange = e => {
    const petId = e.target.value;
    setSelectPetId(petId);
  };

  const inputOnChange = (event, type) => {
    const { value } = event.target;
    updateData[type] = Number(value);
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
        <input
          type="text"
          className="add-input"
          name={key}
          placeholder={selectedPetValue[key] || 0}
          onChange={event => inputOnChange(event, key)}
          data-cy="add-account-input"
        />
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
      <form
        className="add-account-form"
        onSubmit={handleSubmit}
        data-cy="add-account-form"
      >
        <div>
          <span className="label">펫 선택</span>
          <select
            name="petId"
            className="select-wrapper"
            onChange={selectOnChange}
          >
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
          <button
            type="submit"
            className="submit-btn"
            data-cy="add-account-submit"
          >
            입력완료
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAccount;
