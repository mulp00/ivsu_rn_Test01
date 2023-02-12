import {login, register, resetPassword} from '../services/api';

class LoginStore {
  isLoading: boolean = false;

  error: string | null = null;

  user: any = null;

  accessToken: string | null = null;

  async login(credentials: any) {
    this.isLoading = true;
    try {
      const response = await login(credentials);
      this.user = response.data.user;
      this.accessToken = response.data.access_token;
      this.error = null;
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  }

  async register(credentials: any) {
    this.isLoading = true;
    try {
      await register(credentials);
      this.error = null;
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  }

  async resetPassword(email: string) {
    this.isLoading = true;
    try {
      await resetPassword(email);
      this.error = null;
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  }
}

export default LoginStore;
