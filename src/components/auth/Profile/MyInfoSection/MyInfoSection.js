import './MyInfoSection.scss';
import { queryKeys } from 'lib/reactQuery/queryKeys';
import { useModal } from 'components/common/Modal/context/useModal';
import { useQuery } from '@tanstack/react-query';
import CLIENT from 'lib/APIs/client';
import profileImage from 'lib/assets/images/dog/lg_icon.png';
import EditProfile from '../../Modal/EditProfile/EditProfile';
import Withdrawal from '../../Modal/Withdrawal/Withdrawal';
import PetSetting from '../../Modal/PetSetting/PetSetting';

function MyInfoSection() {
  const { openModal } = useModal();

  // 하다가 중단 : api의 request param을 모르겠음
  const fetchProfile = async () => {
    const response = await CLIENT.get('/mypage');
    console.log(response);
  };

  const useFetchProfile = (year, month) => {
    const fallback = [];
    const { data: consumptions = fallback } = useQuery(
      [queryKeys.account, year, month],
      () => fetchProfile(year, month),
    );
    return consumptions;
  };

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
          <img src={profileImage} alt="profile" />
        </div>
        <p className="nickName">강아지</p>
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
