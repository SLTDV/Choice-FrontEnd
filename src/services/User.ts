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
        url: process.env.REACT_APP_BASE_URL + '/user/my',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
  userWithdrawal() {
    try {
      return instance({
        method: 'DELETE',
        url: process.env.REACT_APP_BASE_URL + '/user',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
  editProfileImage(image: string) {
    try {
      return instance({
        method: 'PATCH',
        url: process.env.REACT_APP_BASE_URL + '/user/image',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
        data: {
          image: image,
        },
      });
    } catch (error) {
      return error;
    }
  }
  editNickname(nickname: string) {
    try {
      return instance({
        method: 'PATCH',
        url: process.env.REACT_APP_BASE_URL + '/user',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
        data: {
          nickname: nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
