import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginBoxComponent} from './components/login-box/login-box.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import {LoginService} from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    EmailLoginComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
