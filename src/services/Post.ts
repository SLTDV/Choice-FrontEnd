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

  makeChoice(data: MakeChoiceData) {
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
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getTodaysPost() {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/post/today',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getPostInfo(idx: number) {
    try {
      return instance({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL + '/post/web/' + idx,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  vote(idx: number, choice: number) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/post/vote/' + idx,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
        data: {
          choice: choice,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Post();
