import { instance } from '../libs/instance';
import { SigninInterface, SignupInterface } from '../types/auth.types';
import tokenService from '../utils/tokenService';

class Auth {
  signup(phoneNumber: string, data: SignupInterface) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/auth/signup',
        data: {
          phoneNumber: phoneNumber,
          nickname: data.nickname,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
  signin(data: SigninInterface) {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/auth/signin',
        data: {
          phoneNumber: data.phoneNumber,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
  logout() {
    try {
      return instance({
        method: 'DELETE',
        url: process.env.REACT_APP_BASE_URL + '/auth',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
  getAuthenticationNumber(phoneNumber: string) {
    try {
      return instance({
        method: 'POST',
        url:
          process.env.REACT_APP_BASE_URL +
          `/auth/phone?phoneNumber=${phoneNumber}`,
      });
    } catch (error) {
      return error;
    }
  }
  checkAuthenticationNumber(phoneNumber: string, authCode: string) {
    try {
      return instance({
        method: 'GET',
        url:
          process.env.REACT_APP_BASE_URL +
          `/auth/phone?phoneNumber=${phoneNumber}&authCode=${authCode}`,
      });
    } catch (error) {
      return error;
    }
  }
  getAuthenticationNumberPassword(phoneNumber: string) {
    try {
      return instance({
        method: 'GET',
        url:
          process.env.REACT_APP_BASE_URL +
          `/auth/phone/password?phoneNumber=${phoneNumber}`,
      });
    } catch (error) {
      return error;
    }
  }
  changePassword(phoneNumber: string, password: string) {
    try {
      return instance({
        method: 'PATCH',
        url: process.env.REACT_APP_BASE_URL + '/auth/password',
        data: {
          phoneNumber: phoneNumber,
          password: password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
