export interface ILogin {
  username: string;
  password: string;
  grant_type: string;
}
export interface IToken {
  access_token: string;
  expires_in: number;
  jti: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}
