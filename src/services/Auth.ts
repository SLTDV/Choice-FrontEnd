import { instance } from '../libs/instance';
import { SigninInterface, SignupInterface } from '../types/auth.types';

class Auth {
  signup(data: SignupInterface) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/auth/signup',
        data: {
          nickname: data.nickname,
          email: data.email,
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
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/auth/signin',
        data: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
