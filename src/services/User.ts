import { instance } from '../libs/instance';
import tokenService from '../utils/tokenService';

class User {
  getMiniProfile() {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/user/header',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
  getMyPost() {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/user',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
