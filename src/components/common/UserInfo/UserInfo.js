import './UserInfo.scss';
import dog from 'lib/assets/아카이브/강아지이미지/icon_00.png';

function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="user-img">
        <img src={dog} alt="dog-img" />
      </div>
      <div className="user-nickname-email">
        <div className="user-nickname">
          <span>닉네임</span>
        </div>
        <div className="user-email">
          <span>이메일</span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
