import apiConfig from '@/applications/config/api.ts';
import axios from 'axios';

axios.defaults.timeout = 10000;

// Axios instances for OAuth2 Login  and interceptors
const Oauth2Login = axios.create({
  auth: {
    password: apiConfig.client_secret,
    username: apiConfig.client_id,
  },
  baseURL: apiConfig.api_url_server
});

Oauth2Login.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

Oauth2Login.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(responseValidate(error))
);

function responseValidate(error: any) {
  if (!error.response) {
    return "Error en la conexión con el servidor";
  }

  if (error.response.data.error === "invalid_grant") {
    return error.response.data.error_description;
  }
  else {
    return error.response.data.error;
  }
}
// end of Axios instances for OAuth2 Login  and interceptors


// Refresh token axios instance and interceptors
const Oauth2RefreshToken = axios.create({
  auth: {
    password: apiConfig.client_secret,
    username: apiConfig.client_id,
  },
  baseURL: `${apiConfig.api_url_server}${apiConfig.token_endpoint}`,
  params: {
    'grant_type': 'refresh_token'
  },
});
Oauth2RefreshToken.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(responseValidateRefreshToken(error))
);

function responseValidateRefreshToken(error: any) {
  if (!error.response) {
    return "Error en la conexión con el servidor";
  }

  if (error.response.status === 401) {
    // logout();
  }
  else {
    return error.response.data.error;
  }
}
// end of Refresh token axios instance and interceptors

export { Oauth2Login, Oauth2RefreshToken };
