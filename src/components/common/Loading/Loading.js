// import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { Oval } from 'react-loader-spinner';
import './Loading.scss';

function Loading() {
  // const isFetching = useIsFetching(); // return 0:false, 1:true
  // const isMutating = useIsMutating(); // return 0:false, 1:true

  // const hideCss = isFetching || isMutating ? '' : 'hide';

  return (
    <div className="loading-spinner">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loading;
