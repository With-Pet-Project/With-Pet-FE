import './AddPet.scss';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import ModalButtons from '../ModalButtons';

const MONTH = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const YEAR = [];

const date = new Date();
for (let i = 0; i < 25; i++) {
  YEAR.push(date.getFullYear() - i);
}

function AddPet() {
  return (
    <div className="add-Pet">
      <h2>반려동물 추가</h2>
      <p>반려동물을 입력해주세요.</p>
      <div className="add-Pet-content">
        <div className="add-Pet-input">
          <h3>이름</h3>
          <input type="text" placeholder="10자 이내로 입력하세요" />
        </div>
        <div className="add-Pet-birthday">
          <h3>생년월일</h3>
          <div className="birthday-selector">
            <div className="birthday-year">
              <select id="birthday-year">
                {YEAR.map(y => (
                  <option value={y}>{y}년</option>
                ))}
              </select>
              <DownArrow htmlFor="birthday-year" />
            </div>
            <div className="birthday-month">
              <select id="birthday-month">
                {MONTH.map((m, idx) => (
                  <option value={idx + 1}>{m}월</option>
                ))}
              </select>
              <DownArrow htmlFor="birthday-month" />
            </div>
          </div>
        </div>
        <div className="add-Pet-input">
          <h3>정보</h3>
          <input type="text" placeholder="몸무게를 입력하세요" />
        </div>
        <ModalButtons Component={AddPet} />
      </div>
    </div>
  );
}

export default AddPet;
