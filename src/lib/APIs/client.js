import axios from 'axios';

// Domain =  with-pet-be.org
// export const BASE_URL = 'http://15.165.92.156:8080';
export const BASE_URL = process.env.REACT_APP_BASE_URL; // 임시 서버

const CLIENT = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

CLIENT.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);
    const originalRequest = error.config;
    if (
      error.response.status === 400 && // 만료된 토큰으로 인한 401 에러
      error.response.data === '유효기간이 만료된 토큰입니다.' &&
      !originalRequest.retry // 재시도 중인 요청이 아닐 경우에만 갱신 요청
    ) {
      originalRequest.retry = true;
      // CLIENT.defaults.headers.common.Authorization = null;
      try {
        const response = await CLIENT.get(
          // 토큰만 재요청하는 api
          '/reissue',
          {},
          { withCredentials: true }, // 쿠키를 주고 받기 위해 withCredentials 설정
        );
        const newAccessToken = response.data.data;
        localStorage.removeItem('jwt_token');
        localStorage.setItem('jwt_token', newAccessToken);
        // CLIENT.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 다시 요청하기 위해 헤더에 추가
        return CLIENT(originalRequest); // 다시 요청
      } catch (err) {
        console.log('~~~~갱신 실패~~~~~~~', err);
      }
    }
    return Promise.reject(error);
  },
);
export default CLIENT;
