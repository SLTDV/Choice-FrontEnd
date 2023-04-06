import { instance } from '../libs/instance';
import tokenService from '../utils/tokenService';

class Image {
  uploadImage(formdata: any) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/image/profile',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
        data: formdata,
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Image();
