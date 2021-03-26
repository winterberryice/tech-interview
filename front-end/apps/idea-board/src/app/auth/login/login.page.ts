import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthLogin } from '@ccal-apps/core';
import { Store } from '@ngxs/store';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store) {}

  login(): void {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(new AuthLogin(email, password));
  }
}
