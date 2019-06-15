import axios from 'axios';

import {BASE_URL} from './constants.js';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `${BASE_URL}/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  return api;
};
