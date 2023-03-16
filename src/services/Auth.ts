import { instance } from '../libs/instance';
import { REACT_APP_BASE_URL } from '../shared/config';
import { SignupInterface } from '../types/auth.types';

class Auth {
  signup(data: SignupInterface) {
    try {
      return instance({
        method: 'POST',
        url: REACT_APP_BASE_URL + '/auth/signup',
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
}

export default new Auth();
