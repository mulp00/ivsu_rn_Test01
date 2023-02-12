import {createContext, useContext} from 'react';
import LoginStore from './LoginStore';

class RootStore {
  loginStore: LoginStore;

  constructor() {
    this.loginStore = new LoginStore();
  }
}

export const RootStoreContext = createContext(new RootStore());

export const useRootStore = (): RootStore => {
  return useContext(RootStoreContext);
};
