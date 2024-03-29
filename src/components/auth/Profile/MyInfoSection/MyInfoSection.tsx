/* eslint-disable no-param-reassign */
/* eslint-disable react/no-this-in-sfc */
import './MyInfoSection.scss';
import { ReactElement } from 'react';
import { useModal } from 'components/common/Modal/context/useModal';
import FallbackImg from 'lib/assets/images/dog/lg_icon.png';
import EditProfile from '../../Modal/EditProfile/EditProfile';
import DeleteUser from '../../Modal/DeleteUser/DeleteUser';
import PetSetting from '../../Modal/PetSetting/PetSetting';
import { useUser } from '../../hooks/useUser';

function MyInfoSection(): ReactElement {
  const { openModal } = useModal();
  const user = useUser();

  const handleEditProfile = (): void => {
    openModal(EditProfile);
  };

  const handleDeleteUser = (): void => {
    openModal(DeleteUser);
  };

  const handleEditPet = (): void => {
    openModal(PetSetting);
  };

  return (
    <div className="MyInfoSection">
      <div className="myInfo">
        <div className="profile-img">
          <img
            src={user.profileImg || FallbackImg}
            alt="profile"
            onError={({ target }) => {
              (target as HTMLImageElement).onerror = null;
              (target as HTMLImageElement).src = FallbackImg;
            }}
            data-cy="profile-img"
          />
        </div>
        <p className="nickName" data-cy="profile-nickname">
          {user.nickName}
        </p>
      </div>
      <button
        type="button"
        className="Withdrawal-btn btn"
        onClick={handleDeleteUser}
        data-cy="delete-user-btn"
      >
        회원탈퇴
      </button>
      <button
        type="button"
        className="edit-profile-btn btn"
        onClick={handleEditProfile}
        data-cy="mypage-edit-profile"
      >
        프로필 편집
      </button>
      <button
        type="button"
        className="edit-pet-btn btn"
        onClick={handleEditPet}
        data-cy="mypage-edit-pet"
      >
        펫 편집
      </button>
    </div>
  );
}

export default MyInfoSection;
