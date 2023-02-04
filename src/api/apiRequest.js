import axios from 'axios';

const baseURL = `${process.env.REACT_APP_URL}`;

export const publicRequest = axios.create({
  baseURL: baseURL,
});

axios.defaults.baseURL = baseURL;

const cancheroRequest = axios.create();

cancheroRequest.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.getItem('tokenCanchero');
    if (token && config.headers !== undefined) {
      config.headers.Authorization = token;
    }
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default cancheroRequest;
