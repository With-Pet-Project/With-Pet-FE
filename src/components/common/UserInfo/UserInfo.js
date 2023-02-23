import './UserInfo.scss';
import dog from 'lib/assets/images/dog/md_icon.png';

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
