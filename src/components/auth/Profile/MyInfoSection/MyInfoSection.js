import './MyInfoSection.scss';
import profileImage from 'lib/assets/아카이브/강아지이미지/icon_01.png';

function MyInfoSection() {
  return (
    <div className="MyInfoSection">
      <div className="myInfo">
        <div className="profile-img">
          <img src={profileImage} alt="profile" />
        </div>
        <p className="nickName">강아지</p>
      </div>
      <button type="button" className="Withdrawal-btn btn">
        회원탈퇴
      </button>
      <button type="button" className="edit-profile-btn btn">
        프로필 편집
      </button>
    </div>
  );
}

export default MyInfoSection;
