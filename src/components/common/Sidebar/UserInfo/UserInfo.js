import './UserInfo.scss';
import dog from 'lib/assets/images/dog/md_icon.png';

function UserInfo({ user = null }) {
  return (
    <div className="user-info-container">
      {!user ? (
        <span>로그인을 진행해주세요</span>
      ) : (
        <>
          <div className="user-img">
            <img src={user.profileImg || dog} alt="dog-img" />
          </div>
          <div className="user-nickname-email">
            <div className="user-nickname">
              <span>{user.nickName}</span>
            </div>
            <div className="user-email">
              <span>이메일</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
