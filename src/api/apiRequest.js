import axios from 'axios';

const baseURL = `${process.env.REACT_APP_URL}`;

export const publicRequest = axios.create({
  baseURL: baseURL,
});

axios.defaults.baseURL = baseURL;

const cancheroRequest = axios.create();

cancheroRequest.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    // if (token && config.headers !== undefined) {
    //   config.headers.Authorization = token;
    // }
    config.headers.Authorization =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI1ODMzOTEwMzBlYmM1ODY4YzljNyIsImlhdCI6MTY3NTM2NjcyMiwiZXhwIjoxNjgwNTUwNzIyfQ.Gb2MFCP3fWXOIlxtHw6fQ8HB8HDuhI7ZrVVsf_R6rXk';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default cancheroRequest;
