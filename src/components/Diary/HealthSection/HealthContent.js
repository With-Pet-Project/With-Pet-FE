import './HealthContent.scss';
import { vars } from 'lib/styles/vars';
import styled from 'styled-components';

const Input = styled.input`
  max-width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  padding: 0 14px;
  font-size: 14px;

  &:focus {
    background-color: #fff;
    outline: none;
    border: 1px solid $backgroundYellow;
  }

  @media screen and (max-width: ${vars.semiWide}) {
    width: 100%;
  }
`;

function HealthContent({
  category,
  text,
  value,
  unit,
  imgUrl = null,
  edit,
  onChange,
}) {
  return (
    <div className="Health-category">
      <div className="Health-category-top">
        <div>
          <h3>{category}</h3>
          <p>{text}</p>
        </div>
        <div className="Health-circle-img">
          {!edit && <img src={imgUrl} alt="섹션 이미지" />}
        </div>
      </div>
      <div className="Health-category-bottom">
        {!edit ? (
          <>
            <em>{value} </em>
            <span>{unit}</span>
          </>
        ) : (
          <>
            <Input
              type="text"
              id={category}
              onChange={onChange}
              placeholder={value}
            />
            <label htmlFor={category}>{unit}</label>
          </>
        )}
      </div>
    </div>
  );
}

export default HealthContent;
