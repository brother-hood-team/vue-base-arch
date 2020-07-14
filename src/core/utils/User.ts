import JwtDecode from "jwt-decode";

export default class User {

  public static from(token: string) {
    try {
      const obj = JwtDecode(token)
      return new User(obj)
    } catch (_) {
      return null
    }
  }

  private user_name: string;
  private authorities: String[];
  private scope: String[];
  private organization: string;

  constructor(puser: User) {
    this.user_name = puser.user_name;
    this.authorities = puser.authorities;
    this.scope = puser.scope;
	this.organization = puser.organization;
  }
}
