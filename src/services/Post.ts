import { instance } from '../libs/instance';
import { MakeChoiceData } from '../types/choice.types';
import tokenService from '../utils/tokenService';

class Post {
  getPost(page: number, size: number) {
    try {
      return instance({
        method: 'GET',
        url:
          process.env.REACT_APP_BASE_URL +
          `/post/latested?page=${page}&size=${size}`,
      });
    } catch (error) {
      return error;
    }
  }

  getPopularPost(page: number, size: number) {
    try {
      return instance({
        method: 'GET',
        url:
          process.env.REACT_APP_BASE_URL +
          `/post/popularity?page=${page}&size=${size}`,
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

  getPostInfo(idx: number, page: number, size: number) {
    try {
      return instance({
        method: 'GET',
        url:
          process.env.REACT_APP_BASE_URL +
          `/post/detail/${idx}?page=${page}&size=${size}`,
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

  removeChoice(idx: number) {
    try {
      return instance({
        method: 'DELETE',
        url: process.env.REACT_APP_BASE_URL + '/post/' + idx,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  reportChoice(idx: number) {
    try {
      return instance({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/post/' + idx,
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Post();
