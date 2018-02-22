import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginBoxComponent} from './components/login-box/login-box.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {AuthenticationGuard} from './guards/authentication.guard';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    EmailLoginComponent,
    SocialLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
