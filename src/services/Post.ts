import { instance } from '../libs/instance';
import tokenService from '../utils/tokenService';

class Post {
  getPost() {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/post/web',
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Post();
