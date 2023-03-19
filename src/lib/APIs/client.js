/* eslint-disable consistent-return */
import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const CLIENT = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

CLIENT.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 400 && // 만료된 토큰으로 인한 401 에러
      error.response.data === '유효기간이 만료된 토큰입니다.' &&
      !originalRequest.retry // 재시도 중인 요청이 아닐 경우에만 갱신 요청
    ) {
      if (isRefreshing) {
        try {
          const token = await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
          originalRequest.headers.Authorization = `Bearer ${token}`; // 다시 요청하기
          return axios(originalRequest);
        } catch (err) {
          throw error;
        }
      }
      originalRequest.retry = true;
      isRefreshing = true;
      try {
        const response = await CLIENT.get(
          '/reissue',
          {},
          { withCredentials: true }, // 쿠키를 주고 받기 위해 withCredentials 설정
        );
        const newAccessToken = response.data.data;
        localStorage.removeItem('jwt_token');
        localStorage.setItem('jwt_token', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 다시 요청하기
        processQueue(null, newAccessToken);
        return CLIENT(originalRequest);
      } catch (err) {
        processQueue(err, null);
        throw error;
      } finally {
        isRefreshing = false;
      }
    }
    throw error;
  },
);

export default CLIENT;
