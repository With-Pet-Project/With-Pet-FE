import './HealthContent.scss';
import { vars } from 'lib/styles/vars';
import styled from 'styled-components';

const Input = styled.input`
  max-width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  padding: 0 14px;
  font-size: 14px;

  &:focus {
    background-color: #fff;
    outline: none;
    border: 1px solid $backgroundYellow;
  }

  @media screen and (max-width: ${vars.semiWide}) {
    width: 100%;
  }
`;

function HealthContent({ category, text, value, unit, image = null, edit }) {
  return (
    <div className="Health-category">
      <div className="Health-category-top">
        <div>
          <h3>{category}</h3>
          <p>{text}</p>
        </div>
        <div className="Health-circle-img">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 77 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.8 52.4364C30.8 44.408 36.7324 39.4752 39.6985 38.0124C52.7682 31.5369 59.5656 30.9538 69.1747 36.57C78.7839 42.1861 77.3935 52.4364 76.034 55.8736C74.6745 59.3108 71.8319 62.9322 53.6642 69.4997C35.4965 76.0673 30.8 62.4719 30.8 52.4364Z"
              fill="#F0FAFF"
            />
            <path
              d="M10.934 17.6521C10.934 17.6521 7.6711 18.2103 6.95885 22.2624C6.42948 25.2366 5.22635 34.2648 4.61998 38.8463C4.36973 40.7617 5.19748 42.6771 6.80485 43.7454C10.3757 46.1228 18.249 49.6071 33.7452 49.6071"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M33.7451 49.5976C49.2414 49.5976 57.1146 46.1134 60.6855 43.736C62.2929 42.6676 63.1206 40.7522 62.8704 38.8369C62.264 34.2554 61.0512 25.2367 60.5315 22.253C59.8192 18.2009 56.5564 17.6426 56.5564 17.6426"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M25.4004 19.5291C25.4004 16.6994 27.9991 14.399 31.2043 14.399C34.4094 14.399 37.0081 16.6994 37.0081 19.5291"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M34.9194 15.2556C34.9194 12.4932 37.4123 10.2602 40.4827 10.2602C43.5531 10.2602 46.0459 12.4932 46.0459 15.2556"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M51.2626 20.0489C54.4678 20.0489 57.0665 17.4501 57.0665 14.245C57.0665 11.0399 54.4678 8.44111 51.2626 8.44111C50.0499 8.44111 48.9238 8.81649 47.9901 9.45174C47.9901 9.38436 47.9998 9.32661 47.9998 9.25924C47.9998 6.05411 45.401 3.45536 42.1959 3.45536C40.4441 3.45536 38.8753 4.23499 37.8165 5.45736C36.8059 3.76336 34.9579 2.63724 32.8404 2.63724C31.1271 2.63724 29.5871 3.38799 28.5188 4.57186C27.46 3.38799 25.92 2.63724 24.1971 2.63724C20.992 2.63724 18.3933 5.23599 18.3933 8.44111C18.3933 8.57586 18.4029 8.70099 18.4125 8.83574C17.7676 8.58549 17.0554 8.44111 16.3239 8.44111C13.1188 8.44111 10.52 11.0399 10.52 14.245C10.52 16.17 11.4633 17.864 12.8974 18.9227C11.8771 19.9719 11.2419 21.3964 11.2419 22.9749C11.2419 26.18 13.8406 28.7787 17.0458 28.7787C20.2509 28.7787 22.8496 26.18 22.8496 22.9749"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M27.0461 28.2975C27.0461 28.2975 44.1594 30.9732 56.3158 23.5524"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M36.6999 40.117C35.7952 39.2219 34.9578 38.7984 33.6199 38.808C32.4168 38.808 31.4447 39.2315 30.5399 40.1363C29.0288 41.657 27.4984 44.583 28.7112 45.7958C29.6929 46.7775 31.3292 46.4599 32.7152 45.4878C33.2638 45.1028 33.9953 45.1028 34.5439 45.4878C35.9395 46.4503 37.5662 46.7679 38.5479 45.7861C39.7607 44.5734 38.2207 41.657 36.6999 40.1363V40.117Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M31.6986 36.68C32.7742 36.4748 33.391 34.9709 33.0763 33.3209C32.7615 31.6709 31.6344 30.4996 30.5587 30.7048C29.4831 30.91 28.8662 32.4139 29.181 34.0639C29.4958 35.714 30.6229 36.8852 31.6986 36.68Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M29.0893 40.6059C30.0366 40.0566 30.1214 38.4333 29.2787 36.9801C28.436 35.527 26.985 34.7944 26.0377 35.3437C25.0904 35.8931 25.0056 37.5164 25.8483 38.9695C26.691 40.4226 28.142 41.1552 29.0893 40.6059Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M38.3953 34.1567C38.7215 32.5198 38.0984 31.0159 37.0037 30.7977C35.9089 30.5796 34.7569 31.7297 34.4307 33.3667C34.1045 35.0036 34.7276 36.5075 35.8224 36.7257C36.9171 36.9438 38.0691 35.7937 38.3953 34.1567Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M41.6004 39.3385C42.4773 37.9058 42.42 36.2742 41.4724 35.6942C40.5249 35.1142 39.0458 35.8054 38.1689 37.2381C37.2919 38.6708 37.3492 40.3024 38.2968 40.8824C39.2444 41.4624 40.7234 40.7712 41.6004 39.3385Z"
              stroke="#48341B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="Health-category-bottom">
        {!edit ? (
          <>
            <em>{value} </em>
            <span>{unit}</span>
          </>
        ) : (
          <>
            <Input type="text" id={category} />
            <label htmlFor={category}>{unit}</label>
          </>
        )}
      </div>
    </div>
  );
}

export default HealthContent;
