import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CommonLayoutPage from 'pages/CommonLayoutPage';
import LandingPage from 'pages/LandingPage';
import DiaryPage from 'pages/DiaryPage';
import CommunityPage from 'pages/CommunityPage';
import AccountsPage from 'pages/AccountsPage';
import MyPage from 'pages/MyPage';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayoutPage />}>
          <Route index element={<LandingPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
