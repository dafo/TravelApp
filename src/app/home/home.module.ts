import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { IgxInputGroupModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    SetNewPasswordComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule
  ]
})
export class HomeModule {
}
