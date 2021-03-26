import { Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken } from '@ngxs/store';
import { User } from '../_models/user.model';
import { UseDarkMode } from './dark-mode.actions';

export const DARK_MODE_STATE_TOKEN = new StateToken<User>('darkMode');

@State<boolean>({
  name: DARK_MODE_STATE_TOKEN,
  defaults: false,
})
@Injectable()
export class DarkModeState {
  @Action(UseDarkMode)
  useDarkMode(ctx: StateContext<boolean>, action: UseDarkMode) {
    ctx.setState(action.useDarkMode);
  }
}
