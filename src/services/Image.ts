import { instance } from '../libs/instance';
import tokenService from '../utils/tokenService';

class Image {
  uploadImage(formdata: FormData) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/image/profile',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      return error;
    }
  }
  uploadPostImage(formdata: FormData) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/image',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Image();
