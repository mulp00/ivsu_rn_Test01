import {IUserData} from './IUserData';
export interface ILoginResponse {
  access_token: string;
  user: IUserData;
}
