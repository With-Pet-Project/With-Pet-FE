import styled from 'styled-components';
import { getComma } from 'lib/utils/account';
import './EditTodayItem.scss';

function EditTodayItem({ id, name, price = 0, darkColor, onChange }) {
  return (
    <li className="today-consumption-item">
      <div className="item-title">
        <ColorSign borderColor={darkColor} />
        <span className="name">{name}</span>
      </div>
      <div className="today-edit-price">
        <input
          onChange={event => onChange(event, id)}
          className="today-input"
          placeholder={price && getComma(price)}
        />
        <span className="unit">원</span>
      </div>
    </li>
  );
}
export default EditTodayItem;

const ColorSign = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background-color: ${props => props.borderColor};
`;
