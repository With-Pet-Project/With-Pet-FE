import './AchievementRate.scss';
import { vars } from 'lib/styles/vars';

import styled from 'styled-components';

const AchievementStick = styled.div`
  width: 100%;
  height: 4px;
  background-color: #d9d9d9;
  margin: 20px 0 10px;
  border-radius: 100px;

  & div {
    height: 100%;
    width: ${({ rate }) => rate}%;
    background-color: ${vars.backgroundYellow};
    border-radius: inherit;
  }
`;

// 추후에 서버 data와 연동 필요
const rate = 40;

function AchievementRate() {
  return (
    <>
      <AchievementStick rate={rate}>
        <div />
      </AchievementStick>
      <div className="rate-result-text">
        <span>전체 목표 달성률</span>
        <span>{rate}%</span>
      </div>
    </>
  );
}

export default AchievementRate;
