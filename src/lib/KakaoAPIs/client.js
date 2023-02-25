import axios from 'axios';

const BASE_URL = 'https://kauth.kakao.com';
export const REDIRECT_URI = `${window.location.href}/oauth/callback`;

export const KAKAO_OAUTH_URL = `${BASE_URL}/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_OAUTH_CLIENT = axios.create({
  baseURL: `${BASE_URL}`,
});
