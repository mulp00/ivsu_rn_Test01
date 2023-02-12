import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ILoginCredentials} from '../entities/ILoginCredentials';
//import {IUserData} from '../entities/IUserData';
import {ILoginResponse} from '../entities/ILoginResponse';

const BASE_URL = 'https://your-api-server.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async config => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        axios.defaults.headers.common.Authorization = accessToken;
      }
      return Promise.resolve(config);
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;

export const login = (
  credentials: ILoginCredentials,
): Promise<AxiosResponse<ILoginResponse>> => {
  return api.post<ILoginResponse>('auth/login', credentials).then(response => {
    AsyncStorage.setItem('accessToken', response.data.access_token);
    return response;
  });
};

export const register = (
  credentials: ILoginCredentials,
): Promise<AxiosResponse> => {
  return api.post('auth/register', credentials);
};

export const resetPassword = (email: string): Promise<AxiosResponse> => {
  return api.post('auth/reset-password', {email});
};

export const fetchItems = (): Promise<AxiosResponse> => {
  return api.get('items');
};

export const fetchItemDetails = (itemId: number): Promise<AxiosResponse> => {
  return api.get(`items/${itemId}`);
};

export const updateItemLocation = (
  itemId: number,
  location: any,
): Promise<AxiosResponse> => {
  return api.patch(`items/${itemId}`, {location});
};
