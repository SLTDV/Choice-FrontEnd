import { instance } from '../libs/instance';
import tokenService from '../utils/tokenService';

class CommentApi {
  addComment(idx: number, content: string) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/comment/' + idx,
        data: {
          content: content,
        },
      });
    } catch (error) {
      return error;
    }
  }

  removeComment(postIdx: number, commentIdx: number) {
    try {
      return instance({
        method: 'DELETE',
        url:
          process.env.REACT_APP_BASE_URL + `/comment/${postIdx}/${commentIdx}`,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  editComment(commentIdx: number, content: string) {
    try {
      return instance({
        method: 'DELETE',
        url: process.env.REACT_APP_BASE_URL + `comment/${commentIdx}`,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
        data: {
          content: content,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
export default new CommentApi();
