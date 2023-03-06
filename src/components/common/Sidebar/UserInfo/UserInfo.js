/* eslint-disable no-param-reassign */
import './UserInfo.scss';
import FallbacktImg from 'lib/assets/images/dog/md_icon.png';

function UserInfo({ user = null }) {
  return (
    <div className="user-info-container">
      {!user ? (
        <span>로그인을 진행해주세요</span>
      ) : (
        <>
          <div className="user-img">
            <img
              src={user.profileImg || FallbacktImg}
              alt="dog-img"
              onError={({ target }) => {
                target.onerror = null;
                target.src = FallbacktImg;
              }}
            />
          </div>
          <div className="user-nickname-email">
            <div className="user-nickname">
              <span>{user.nickName}</span>
            </div>
            <div className="user-email">
              <span>{user.email}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
