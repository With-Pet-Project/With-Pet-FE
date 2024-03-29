import { ReactElement } from 'react';
import './Profile.scss';
import MyInfoSection from './MyInfoSection/MyInfoSection';
import MyPostSection from './MyPostSection/MyPostSection';

function Profile(): ReactElement {
  return (
    <div className="profile-container">
      <div className="profile">
        <MyInfoSection />
        <MyPostSection />
      </div>
    </div>
  );
}

export default Profile;
