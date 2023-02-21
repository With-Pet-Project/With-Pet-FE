import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CommonLayoutPage from 'pages/CommonLayoutPage';
import LandingPage from 'pages/LandingPage';
import DiaryPage from 'pages/DiaryPage';
import CommunityPage from 'pages/CommunityPage';
import ArticlePage from 'pages/ArticlePage';
import EditorPage from 'pages/EditorPage';
import AccountPage from 'pages/AccountPage';
import MyPage from 'pages/MyPage';
import HospitalPage from 'pages/HospitalPage';
import LogInPage from 'pages/LogInPage';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayoutPage />}>
          <Route index element={<LandingPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="community/:articleId" element={<ArticlePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="hospital" element={<HospitalPage />} />
          <Route path="login" element={<LogInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
