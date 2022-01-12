import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
import {navigate} from '../navigations/SideMenu/RootNavigator';
import {LOGOUT} from '../constants/routeNames';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

console.log('envs.BACKEND_URL', envs.BACKEND_URL);

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise(resolve => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise(reject => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise(reject => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
