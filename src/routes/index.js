import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CommonLayoutPage from 'pages/CommonLayoutPage';
import LandingPage from 'pages/LandingPage';
import DiaryPage from 'pages/DiaryPage';
import CommunityPage from 'pages/CommunityPage';
import ArticlePage from 'pages/ArticlePage';
import EditorPage from 'pages/EditorPage';
import AccountPage from 'pages/AccountPage';
import ProfilePage from 'pages/ProfilePage';
import HospitalPage from 'pages/HospitalPage';
import LogInPage from 'pages/LogInPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import ConfirmPassword from 'pages/ConfirmPassword';
import OAuthCallbackPage from 'pages/OAuthCallbackPage';
import SignUpPage from 'pages/SignUpPage';

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
          <Route path="profile" element={<ProfilePage />} />
          <Route path="hospital" element={<HospitalPage />} />
        </Route>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/login/oauth/callback" element={<OAuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
