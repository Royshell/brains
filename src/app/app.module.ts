import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginBoxComponent} from './components/login/login-box/login-box.component';
import { EmailLoginComponent } from './components/login/email-login/email-login.component';
import { SocialLoginComponent } from './components/login/social-login/social-login.component';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {AuthenticationGuard} from './guards/authentication.guard';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/dashboard/top-bar/top-bar.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { TopRightComponent } from './components/dashboard/top-bar/top-right/top-right.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    EmailLoginComponent,
    SocialLoginComponent,
    DashboardComponent,
    LoginComponent,
    TopBarComponent,
    MainComponent,
    TopRightComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
