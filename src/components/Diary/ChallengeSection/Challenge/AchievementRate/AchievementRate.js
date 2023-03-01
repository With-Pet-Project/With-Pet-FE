import './AchievementRate.scss';
import { vars } from 'lib/styles/vars';
import { useState, useEffect } from 'react';

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

function AchievementRate({ queryData }) {
  const [achievementRate, setAchievementRate] = useState(0);

  useEffect(() => {
    if (queryData) {
      const targetCnts = queryData.reduce((acc, cur) => acc + cur.targetCnt, 0);
      const achieveCnts = queryData.reduce(
        (acc, cur) => acc + cur.achieveCnt,
        0,
      );
      setAchievementRate(Math.floor(achieveCnts / targetCnts));
    }
  }, [queryData]);
  return (
    <>
      <AchievementStick rate={achievementRate}>
        <div />
      </AchievementStick>
      <div className="rate-result-text">
        <span>전체 목표 달성률</span>
        <span>{achievementRate}%</span>
      </div>
    </>
  );
}

export default AchievementRate;
