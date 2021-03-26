export class AuthLogin {
  static readonly type = '[Auth] User Login';
  constructor(public login: string, public password: string) {}
}

export class AuthLogout {
  static readonly type = '[Auth] User Logout';
}
