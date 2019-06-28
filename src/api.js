import axios from 'axios';

import {BASE_URL} from './constants.js';

const ERROR_CODES = [403, 404, 500, 503];

export const createAPI = (onError) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    console.log(error.response.data.error);
    if (ERROR_CODES.includes(error.response.status)) {
      onError();
    }

    return Promise.reject(error);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
