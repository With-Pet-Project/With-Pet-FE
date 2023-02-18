/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TagButton = styled.button`
  border: 1px solid ${({ selected }) => (selected ? '#62ccab' : '#dbdbdb')};
  color: ${({ selected }) => (selected ? '#62ccab' : '#878888')};
`;

function Tag({ tagName, tagId, onClickTag, params }) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    params === tagId ? setSelected(true) : setSelected(false);
  }, [params, tagId]);

  return (
    <div className="tag-item">
      <TagButton
        type="button"
        onClick={() => onClickTag(tagId)}
        selected={selected}
      >
        <span>{tagName}</span>
      </TagButton>
    </div>
  );
}

export default Tag;
