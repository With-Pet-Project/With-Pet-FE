import './WalkingSection.scss';
import { useHealthInfo } from '../hooks/useHealthInfo';

function WalkingSection() {
  const { avgWalkDist } = useHealthInfo();

  return (
    <section className="diary-section diary-section-Padding">
      <div className="right-section-text-box">
        <h2 className="section-title">산책 통계</h2>
        <p>이번달 반려견과 산책한 총 킬로미터는?</p>
        <em>
          <b>{avgWalkDist}</b> <span>km</span>
        </em>
      </div>
      <div className="circle-img">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 85 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_416_221)">
            <path
              d="M30.4218 23.9555C31.7412 23.9555 32.8107 22.886 32.8107 21.5667C32.8107 20.2473 31.7412 19.1778 30.4218 19.1778C29.1025 19.1778 28.033 20.2473 28.033 21.5667C28.033 22.886 29.1025 23.9555 30.4218 23.9555Z"
              fill="#48341B"
            />
            <path
              d="M54.8217 23.9555C56.1411 23.9555 57.2106 22.886 57.2106 21.5667C57.2106 20.2473 56.1411 19.1778 54.8217 19.1778C53.5024 19.1778 52.4329 20.2473 52.4329 21.5667C52.4329 22.886 53.5024 23.9555 54.8217 23.9555Z"
              fill="#48341B"
            />
            <path
              d="M36.6774 25.7889H48.6552C49.5329 25.7889 50.2329 26.5 50.2329 27.3667V28.6778C50.2329 32.8555 46.8441 36.2444 42.6663 36.2444C38.4885 36.2444 35.0996 32.8555 35.0996 28.6778V27.3667C35.0996 26.4889 35.8107 25.7889 36.6774 25.7889Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M21.7996 35.4222C21.7996 35.4222 22.7329 45.9667 33.7773 46.7555C35.3884 46.8667 37.0329 46.5778 38.4107 45.7555C40.444 44.5444 42.6662 41.9222 42.6662 36.2555"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M63.8884 35.4222C63.8884 35.4222 62.9551 45.9667 51.9106 46.7555C50.2995 46.8667 48.6551 46.5778 47.2773 45.7555C45.2439 44.5444 43.0217 41.9222 43.0217 36.2555"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M24.1774 41.6445H22.9329C19.4552 41.6445 16.0441 40.2111 13.9218 37.4556C12.5107 35.6222 10.1996 34.5222 7.64405 34.8222C4.64405 35.1778 2.15517 37.5556 1.69961 40.5333C1.3885 42.5222 1.93294 44.3778 3.02183 45.8C3.53294 46.4667 3.53294 47.3889 3.02183 48.0556C1.93294 49.4778 1.3885 51.3333 1.69961 53.3222C2.16628 56.3 4.65517 58.6889 7.64405 59.0333C10.1996 59.3333 12.5107 58.2333 13.9218 56.4C16.0441 53.6445 19.4552 52.2111 22.9329 52.2111H61.9552C65.4329 52.2111 68.844 53.6445 70.9663 56.4C72.3774 58.2333 74.6885 59.3333 77.2441 59.0333C80.2441 58.6778 82.7329 56.3 83.1885 53.3222C83.4996 51.3333 82.9552 49.4778 81.8663 48.0556C81.3552 47.3889 81.3552 46.4667 81.8663 45.8C82.9552 44.3778 83.4996 42.5222 83.1885 40.5333C82.7218 37.5556 80.2329 35.1667 77.2441 34.8222C74.6885 34.5222 72.3774 35.6222 70.9663 37.4556C68.844 40.2111 65.4329 41.6445 61.9552 41.6445H61.8218"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M15.0219 30.1C15.0219 30.1 8.85523 24.6333 7.36635 8.46665C6.97746 4.29999 10.3108 0.733322 14.4886 0.833322C19.8552 0.966655 26.8552 2.02221 30.9886 6.15554"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M22.3662 12.7778C22.3662 12.7778 26.9662 4.43332 43.0218 4.43332"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M71.0107 30.1C71.0107 30.1 77.1885 24.6333 78.6774 8.46665C79.0663 4.29999 75.733 0.733322 71.5552 0.833322C66.1885 0.966655 59.1885 2.02221 55.0552 6.15554"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M63.6663 12.7778C63.6663 12.7778 59.0663 4.43332 43.0107 4.43332"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_416_221">
              <rect
                width="83.3333"
                height="59.9222"
                fill="white"
                transform="translate(0.777344)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default WalkingSection;
