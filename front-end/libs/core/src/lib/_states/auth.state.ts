import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';
import { AuthLogin, AuthLogout } from './auth.actions';
import { User } from '../_models/user.model';

export const AUTH_STATE_TOKEN = new StateToken<User>('auth');

@State<User>({
  name: AUTH_STATE_TOKEN,
  defaults: null,
})
@Injectable()
export class AuthState {
  constructor(private router: Router, private zone: NgZone) {}

  @Selector([AUTH_STATE_TOKEN])
  static isAuthenticated(state: User): boolean {
    return !!state?.id;
  }

  @Action(AuthLogin)
  login(ctx: StateContext<User>) {
    ctx.setState({ id: '1', name: 'Mr User', isAdmin: false });
    this.zone.run(() => {
      this.router.navigate(['/ideas']);
    });
  }

  @Action(AuthLogout)
  logout(ctx: StateContext<User>) {
    ctx.setState(null);
    this.zone.run(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
