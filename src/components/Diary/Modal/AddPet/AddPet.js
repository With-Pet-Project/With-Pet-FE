import './AddPet.scss';
import DownArrow from 'components/common/SelectArrow/DownArrow';
import { useState, useEffect } from 'react';
import { useAddPet } from 'components/Diary/hooks/useAddPet';
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

for (let i = 0; i <= 25; i++) {
  // 현재 부터 25년 전까지
  YEAR.push(new Date().getFullYear() - i);
}

function AddPet() {
  const date = new Date();
  const [year, setYear] = useState(Number(date.getFullYear()));
  const [month, setMonth] = useState(Number(date.getMonth()) + 1);
  const [day, setDay] = useState(1);
  const [numberOfDays, setNumberOfDays] = useState([]);

  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);

  const mutate = useAddPet();

  useEffect(() => {
    const NUMBER_OF_DAYS = Number(new Date(year, month, 0).getDate());
    const tmp = [];
    for (let i = 1; i <= NUMBER_OF_DAYS; i++) {
      tmp.push(i);
    }

    setNumberOfDays([...tmp]);
  }, [year, month]);

  // name, initWeight, birthday, jwt
  const addPet = () =>
    mutate({
      name,
      initWeight: parseFloat(weight),
      birthday: `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`,
    });

  const handleYear = e => setYear(e.target.value);
  const handleMonth = e => setMonth(Number(e.target.value));
  const handleDay = e => setDay(e.target.value);
  const handleName = e => setName(e.target.value);
  const handleWeight = e => setWeight(e.target.value);

  return (
    <div className="add-Pet">
      <h2>반려동물 추가</h2>
      <p>반려동물을 입력해주세요.</p>
      <div className="add-Pet-content">
        <div className="add-Pet-input">
          <h3>이름</h3>
          <input
            type="text"
            placeholder="10자 이내로 입력하세요"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="add-Pet-birthday">
          <h3>생년월일</h3>
          <div className="birthday-selector">
            <div className="birthday-year">
              <select id="birthday-year" value={year} onChange={handleYear}>
                {YEAR.map(y => (
                  <option key={y} value={y}>
                    {y}년
                  </option>
                ))}
              </select>
              <DownArrow htmlFor="birthday-year" />
            </div>
            <div className="birthday-month">
              <select id="birthday-month" value={month} onChange={handleMonth}>
                {MONTH.map((m, idx) => (
                  <option key={m} value={idx + 1}>
                    {m}월
                  </option>
                ))}
              </select>
              <DownArrow htmlFor="birthday-month" />
            </div>
            <div className="birthday-day">
              <select id="birthday-day" value={day} onChange={handleDay}>
                {numberOfDays.map((m, idx) => (
                  <option key={m} value={idx + 1}>
                    {m}일
                  </option>
                ))}
              </select>
              <DownArrow htmlFor="birthday-day" />
            </div>
          </div>
        </div>
        <div className="add-Pet-input">
          <h3>정보</h3>
          <input
            type="text"
            placeholder="몸무게를 입력하세요."
            value={weight}
            onChange={handleWeight}
          />
        </div>
        <ModalButtons
          Component={AddPet}
          disabled={!name.length && !weight.length}
          mutate={addPet}
        />
      </div>
    </div>
  );
}

export default AddPet;
