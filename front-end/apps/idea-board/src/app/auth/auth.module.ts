import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';
import { AuthPage } from './auth.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutPage } from './logout/logout.page';

@NgModule({
  declarations: [LoginPage, AuthPage, LogoutPage],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
