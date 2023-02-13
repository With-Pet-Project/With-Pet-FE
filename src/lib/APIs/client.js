import axios from 'axios';

export const BASE_URL = 'http://15.165.92.156:8080';
export const API_KEY = '...';

const CLIENT = axios.create({
  baseURL: BASE_URL,
});

export default CLIENT;
