import './DropDown.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import { ADMIN_DISTRICT } from 'lib/constants/adminDistrict';
import { useCommunityParams } from 'components/common/hooks/useCommunityParams';

import Option from './Option';

const Wrapper = styled.div`
  height: ${({ open }) => (open ? '230px' : '0')};
  border: 1px solid
    ${({ open }) => (open ? `${vars.backgroundYellow}` : '#fff')};
`;

function DropDown({ open }) {
  const { searchParams, firstPlace, setFirstPlace, setSecondPlace } =
    useCommunityParams();

  const selectFirstPlace = e => {
    e.preventDefault();
    console.log(e.target.value);
    setFirstPlace(e.target.value);
  };

  const selectSecondPlace = e => {
    e.preventDefault();
    setSecondPlace(e.target.value);
  };

  return (
    <Wrapper className="location-dropDown" open={open}>
      <ul className="dropDown-firstplace">
        {Object.keys(ADMIN_DISTRICT).map(f => (
          <Option
            key={f}
            selectPlace={selectFirstPlace}
            value={f}
            searchParams={searchParams}
            parameterName="firstPlace"
          >
            {f}
          </Option>
        ))}
      </ul>
      <ul className="dropDown-secondPlace">
        {ADMIN_DISTRICT[firstPlace].map(s => (
          <Option
            key={s}
            selectPlace={selectSecondPlace}
            value={s}
            searchParams={searchParams}
            parameterName="secondPlace"
          >
            {s}
          </Option>
        ))}
      </ul>
    </Wrapper>
  );
}

export default DropDown;