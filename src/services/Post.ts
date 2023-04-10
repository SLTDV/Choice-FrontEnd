import { instance } from '../libs/instance';
import { MakeChoiceData } from '../types/choice.types';
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

  getPopularPost() {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/post/list/web',
      });
    } catch (error) {
      return error;
    }
  }

  makeChoice(data: MakeChoiceData, options: any) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/post',
        data: {
          title: data.title,
          content: data.content,
          firstVotingOption: data.firstVotingOption,
          secondVotingOption: data.secondVotingOption,
          firstImageUrl: data.firstImageUrl,
          secondImageUrl: data.secondImageUrl,
        },
        ...options,
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Post();
