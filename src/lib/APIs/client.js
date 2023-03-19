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
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`; // 다시 요청하기

            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest.retry = true;
      isRefreshing = true;
      console.log('토큰 재요청');
      return new Promise(function (resolve, reject) {
        CLIENT.get(
          '/reissue',
          {},
          { withCredentials: true }, // 쿠키를 주고 받기 위해 withCredentials 설정
        )
          .then(response => {
            const newAccessToken = response.data.data;
            localStorage.removeItem('jwt_token');
            localStorage.setItem('jwt_token', newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 다시 요청하기
            processQueue(null, newAccessToken);
            resolve(CLIENT(originalRequest));
          })
          .catch(err => {
            processQueue(err, null);
            console.error('~~~~갱신 실패~~~~~~~', err);
            Promise.reject(error);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  },
);

export default CLIENT;

// import axios from 'axios';
// // Domain =  with-pet-be.org
// // export const BASE_URL = 'http://15.165.92.156:8080';
// export const BASE_URL = process.env.REACT_APP_BASE_URL; // 임시 서버

// const CLIENT = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// CLIENT.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 400 && // 만료된 토큰으로 인한 401 에러
//       error.response.data === '유효기간이 만료된 토큰입니다.' &&
//       !originalRequest.retry // 재시도 중인 요청이 아닐 경우에만 갱신 요청
//     ) {
//       originalRequest.retry = true;
//       // CLIENT.defaults.headers.common.Authorization = null;
//       try {
//         console.log('토큰을 재요청합니다');
//         const response = await CLIENT.get(
//           // 토큰만 재요청하는 api
//           '/reissue',
//           {},
//           { withCredentials: true }, // 쿠키를 주고 받기 위해 withCredentials 설정
//         );
//         const newAccessToken = response.data.data;
//         localStorage.removeItem('jwt_token');
//         localStorage.setItem('jwt_token', newAccessToken);
//         // CLIENT.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 다시 요청하기 위해 헤더에 추가

//         return CLIENT(originalRequest); // 다시 요청
//         // 갑자기 /reissue가 호출
//       } catch (err) {
//         console.error('~~~~갱신 실패~~~~~~~', err);
//       }
//     }
//     return Promise.reject(error);
//   },
// );
// export default CLIENT;
