import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CommonLayoutPage from 'pages/CommonLayoutPage';
import LandingPage from 'pages/LandingPage';
import DiaryPage from 'pages/DiaryPage';
import CommunityPage from 'pages/CommunityPage';
import AccountPage from 'pages/AccountPage';
import MyPage from 'pages/MyPage';
import HospitalPage from 'pages/HospitalPage';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayoutPage />}>
          <Route index element={<LandingPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="hospital" element={<HospitalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
