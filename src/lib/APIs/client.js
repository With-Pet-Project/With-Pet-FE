import axios from 'axios';

// export const BASE_URL = 'http://15.165.92.156:8080';
export const BASE_URL = 'http://13.209.146.77:8082'; // 임시 서버

export const CLIENT = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': BASE_URL,
  },
});

export const ACCESS_CLIENT = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
    'Access-Control-Allow-Origin': BASE_URL,
  },
});
