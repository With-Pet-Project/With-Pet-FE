import './MyInfoSection.scss';
import { useModal } from 'components/common/Modal/context/useModal';
import profileDefaultImg from 'lib/assets/images/dog/lg_icon.png';
import EditProfile from '../../Modal/EditProfile/EditProfile';
import Withdrawal from '../../Modal/Withdrawal/Withdrawal';
import PetSetting from '../../Modal/PetSetting/PetSetting';
import { useUser } from '../../hooks/useUser';

function MyInfoSection() {
  const { openModal } = useModal();
  const user = useUser();
  console.log(user);

  const handleEditProfile = () => {
    openModal(EditProfile);
  };

  const handleWithdrawal = () => {
    openModal(Withdrawal);
  };

  const handleEditPet = () => {
    openModal(PetSetting);
  };

  return (
    <div className="MyInfoSection">
      <div className="myInfo">
        <div className="profile-img">
          <img src={user.profileImg || profileDefaultImg} alt="profile" />
        </div>
        <p className="nickName">{user.nickName}</p>
      </div>
      <button
        type="button"
        className="Withdrawal-btn btn"
        onClick={handleWithdrawal}
      >
        회원탈퇴
      </button>
      <button
        type="button"
        className="edit-profile-btn btn"
        onClick={handleEditProfile}
      >
        프로필 편집
      </button>
      <button
        type="button"
        className="edit-pet-btn btn"
        onClick={handleEditPet}
      >
        펫 편집
      </button>
    </div>
  );
}

export default MyInfoSection;
