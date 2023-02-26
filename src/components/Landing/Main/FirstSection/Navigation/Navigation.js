import account from '../../../../../lib/assets/images/landing/section/section01/image_03.png';
import hospital from '../../../../../lib/assets/images/landing/section/section01/image_05.png';
import community from '../../../../../lib/assets/images/landing/section/section01/image_04.png';
import health from '../../../../../lib/assets/images/landing/section/section01/image_01.png';
import challenge from '../../../../../lib/assets/images/landing/section/section01/image_00.png';
import './Navigation.scss';

import Button from './Button';

function Navigation({
  moveToSecond,
  moveToThird,
  moveToForth,
  moveToFifth,
  moveToSixth,
}) {
  return (
    <nav className="landing-first-section-nav">
      <ul>
        <li>
          <Button
            link="/challenge"
            imgSrc={challenge}
            text="건강 챌린지"
            onClick={moveToSecond}
          />
        </li>
        <li>
          <Button
            link="/health"
            imgSrc={health}
            text="건강 기록"
            onClick={moveToThird}
          />
        </li>
        <li>
          <Button
            link="/account"
            imgSrc={account}
            text="가계부"
            onClick={moveToForth}
          />
        </li>
        <li>
          <Button
            link="/community"
            imgSrc={community}
            text="위치기반 커뮤니티"
            onClick={moveToFifth}
          />
        </li>
        <li>
          <Button
            link="/hospital"
            imgSrc={hospital}
            text="병원 찾기"
            onClick={moveToSixth}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
