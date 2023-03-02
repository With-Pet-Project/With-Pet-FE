import axios from 'axios';

// export const BASE_URL = 'http://15.165.92.156:8080';
export const BASE_URL = 'http://13.209.146.77:8082'; // 임시 서버

const CLIENT = axios.create({
  baseURL: BASE_URL,
});

CLIENT.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'jwt_token',
)}`;

export default CLIENT;
