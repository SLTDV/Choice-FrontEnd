import { instance } from '../libs/instance';

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
}
export default new CommentApi();
