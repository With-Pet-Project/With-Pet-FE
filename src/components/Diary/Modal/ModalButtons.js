import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useModal } from 'components/common/Modal/context/useModal';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  & button {
    width: 90px;
    height: 36px;
    border: 1.5px solid ${vars.backgroundYellow};
    border-radius: 10px;
    margin: 0 7px;
  }

  & button:disabled {
    cursor: not-allowed;
    background-color: ${vars.backgroundDisabledYellow} !important;
  }

  & button:first-child {
    background-color: #fff;

    &:hover {
      background-color: ${vars.backgroundYellow};
      color: white;
    }
  }

  & button:last-child {
    background-color: ${vars.backgroundYellow};
    color: #fff;

    &:hover {
      background-color: #f3d124;
    }
  }
`;

function ModalButtons({ Component, mutate, disabled = true }) {
  const { closeModal } = useModal();

  return (
    <ButtonWrapper>
      <button type="button" onClick={() => closeModal(Component)}>
        취소
      </button>
      <button
        type="button"
        onClick={() => {
          mutate();
          closeModal(Component);
        }}
        disabled={disabled}
      >
        추가하기
      </button>
    </ButtonWrapper>
  );
}

export default ModalButtons;
