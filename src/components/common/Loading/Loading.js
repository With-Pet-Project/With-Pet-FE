import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import './Loading.scss';

function Loading() {
  const isFetching = useIsFetching(); // return 0:false, 1:true
  const isMutating = useIsMutating(); // return 0:false, 1:true

  const hideCss = isFetching || isMutating ? '' : 'hide';

  return <div className={hideCss}>{/* <p>Loading...</p> */}</div>;
}

export default Loading;
