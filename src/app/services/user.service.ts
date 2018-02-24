import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn: boolean = false;

  public setUserLoggedIn(isLoggedIn: boolean) {
    this.isUserLoggedIn = isLoggedIn;
  }

  public getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
