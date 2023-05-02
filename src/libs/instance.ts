import axios from 'axios';
import TokenService from '../utils/tokenService';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,PATCH',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const error = err.response;
    if (error.status === 401 && !error.config.__isRetryRequest) {
      return getAuthToken().then((response: any) => {
        TokenService.setUser(response.data);
        error.config.__isRetryRequest = true;
        return instance(error.config);
      });
    }
    return Promise.reject(err);
  }
);

let authTokenRequest: any;

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = makeActualAuthenticationRequest();
    authTokenRequest
      .catch(function () {
        TokenService.removeUser();
        window.location.replace('/signin');
      })
      .then(resetAuthTokenRequest, resetAuthTokenRequest);
  }
  return authTokenRequest;
}

function makeActualAuthenticationRequest() {
  console.log('check refresh token:', TokenService.getLocalRefreshToken());
  return axios({
    method: 'PATCH',
    url: 'auth',
    headers: {
      RefreshToken: TokenService.getLocalRefreshToken(),
    },
    baseURL: process.env.REACT_APP_BASE_URL,
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}
