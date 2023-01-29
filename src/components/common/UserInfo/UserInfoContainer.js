import './UserInfoContainer.scss';

function UserInfoContainer() {
  return (
    <div className="user-info-container">
      <div className="user-img" />
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

export default UserInfoContainer;
