/* eslint-disable no-unused-expressions */
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useCheckChallenge } from 'components/Diary/hooks/useCheckChallenge';
import { useUnCheckChallenge } from 'components/Diary/hooks/useUnCheckChallenge';

const Check = styled.label`
  border: 1px solid
    ${({ check }) => (check ? `${vars.backgroundGreen}` : '#dbdbdb')};
  background-color: ${({ check }) =>
    check ? `${vars.backgroundYellow}` : '#FFFFFF'};

  cursor: pointer;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  margin: 0 15px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  margin-top: -15px;
`;

function CheckBox({ goal }) {
  const { mutate: checkMutate } = useCheckChallenge();
  const uncheck = useUnCheckChallenge();
  const isChecked = () => {
    goal.challengeLogId
      ? uncheck.mutate(goal.challengeLogId)
      : checkMutate(goal.challengeId);
  };

  return (
    <Check htmlFor={goal.id} check={goal.challengeLogId}>
      <input type="checkbox" id={goal.id} onClick={isChecked} />
      <Icon viewBox="0 0 24 24">
        <polyline points="19 7 10 17 5 12" />
      </Icon>
    </Check>
  );
}

export default CheckBox;
