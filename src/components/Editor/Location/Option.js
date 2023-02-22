import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useState, useEffect } from 'react';

const Button = styled.button`
  background-color: ${({ select }) =>
    select ? `${vars.backgroundYellow}` : '#fff'} !important;

  & hover {
    background-color: ${vars.backgroundYellow} !important;
  }
`;

function Option({ parameterName, searchParams, value, selectPlace, children }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(searchParams.get(`${parameterName}`) === value);
  }, [selected, searchParams, value, parameterName]);

  return (
    <li>
      <Button
        onClick={selectPlace}
        type="button"
        value={value}
        select={selected}
      >
        {children}
      </Button>
    </li>
  );
}

export default Option;
