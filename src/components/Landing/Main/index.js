/* eslint-disable no-return-assign */
import { useRef } from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

function Main() {
  const targetRef = useRef([]);
  const option = { behavior: 'smooth' };

  const moveToSecond = () => targetRef.current[0]?.scrollIntoView(option);
  const moveToThird = () => targetRef.current[1]?.scrollIntoView(option);

  return (
    <>
      <FirstSection moveToSecond={moveToSecond} moveToThird={moveToThird} />
      <SecondSection ref={e => (targetRef.current[0] = e)} />
      <ThirdSection ref={e => (targetRef.current[1] = e)} />
    </>
  );
}

export default Main;
