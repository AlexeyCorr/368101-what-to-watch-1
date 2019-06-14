import axios from 'axios';

import {BASE_URL} from './constants.js';

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    
    if (err.response.status !== 200) {
      onLoginFail();
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
