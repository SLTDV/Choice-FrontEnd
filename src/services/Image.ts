import { instance } from '../libs/instance';

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
}
export default new Image();