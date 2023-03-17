import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LogInPage from 'pages/LogInPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import ConfirmPassword from 'pages/ConfirmPassword';
import OAuthCallbackPage from 'pages/OAuthCallbackPage';
import SignUpPage from 'pages/SignUpPage';
import Loading from 'components/common/Loading/Loading';

const CommonLayoutPage = lazy(() => import('pages/CommonLayoutPage'));
const LandingPage = lazy(() => import('pages/LandingPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CommunityPage = lazy(() => import('pages/CommunityPage'));
const ArticlePage = lazy(() => import('pages/ArticlePage'));
const EditorPage = lazy(() => import('pages/EditorPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const HospitalPage = lazy(() => import('pages/HospitalPage'));

function RootRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<CommonLayoutPage />}>
            <Route index element={<LandingPage />} />
            <Route path="diary" element={<DiaryPage />} />
            <Route path="editor" element={<EditorPage />} />
            <Route path="editor/:articleId" element={<EditorPage />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default RootRoute;
