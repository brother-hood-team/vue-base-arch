import apiConfig from "@applications/config/api.ts";
import { Oauth2Login, Oauth2RefreshToken } from "@applications/config/axios-config.ts";

function login(username: string, password: string): Promise<any> {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);
  form.append("grant_type", apiConfig.grant_type);
  return Oauth2Login
    .post(apiConfig.token_endpoint, form)
}

function clearLocalStorage() {
  delete localStorage.token;
  delete localStorage.refresh_token;
  delete localStorage.is_auth;
}

function logout() {
  clearLocalStorage();
  window.location.replace("/");
}

async function refreshToken() {
  Oauth2RefreshToken.defaults.params.refresh_token = localStorage.refresh_token;
  try {
    const { data } = await Oauth2RefreshToken.post(`${apiConfig.api_url_server}${apiConfig.token_endpoint}`);
    localStorage.token = data.access_token;
    localStorage.refresh_token = data.refresh_token;
    localStorage.is_auth = true;
    return data;
  }
  catch (error) {
    return error;
  }
}
export { login, clearLocalStorage, logout, refreshToken };
