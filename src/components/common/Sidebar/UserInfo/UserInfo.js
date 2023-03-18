/* eslint-disable no-param-reassign */
import './UserInfo.scss';
import FallbackImg from 'lib/assets/images/dog/md_icon.png';

function UserInfo({ user = null }) {
  return (
    <div className="user-info-container">
      {!user ? (
        <span>로그인을 진행해주세요</span>
      ) : (
        <>
          <div className="user-img">
            <img
              src={user.profileImg || FallbackImg}
              alt="dog-img"
              onError={({ target }) => {
                target.onerror = null;
                target.src = FallbackImg;
              }}
              data-cy="side-ber-profile-img"
            />
          </div>
          <div className="user-nickname-email">
            <div className="user-nickname">
              <span data-cy="side-ber-nickname">{user.nickName}</span>
            </div>
            <div className="user-email">
              <span data-cy="side-ber-id">{user.email}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
