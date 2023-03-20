/* eslint-disable no-return-assign */
import './index.scss';
import { useRef } from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';

function Main() {
  const targetRef = useRef([]);
  const option = { behavior: 'smooth' };

  const moveToSecond = () => targetRef.current[0]?.scrollIntoView(option);
  const moveToThird = () => targetRef.current[1]?.scrollIntoView(option);
  const moveToForth = () => targetRef.current[2]?.scrollIntoView(option);
  const moveToFifth = () => targetRef.current[3]?.scrollIntoView(option);
  const moveToSixth = () => targetRef.current[4]?.scrollIntoView(option);

  return (
    <>
      <FirstSection
        moveToSecond={moveToSecond}
        moveToThird={moveToThird}
        moveToForth={moveToForth}
        moveToFifth={moveToFifth}
        moveToSixth={moveToSixth}
      />
      <SecondSection ref={elem => (targetRef.current[0] = elem)} />
      <ThirdSection ref={elem => (targetRef.current[1] = elem)} />
      <ForthSection ref={elem => (targetRef.current[2] = elem)} />
      <FifthSection ref={elem => (targetRef.current[3] = elem)} />
      <SixthSection ref={elem => (targetRef.current[4] = elem)} />
    </>
  );
}

export default Main;
