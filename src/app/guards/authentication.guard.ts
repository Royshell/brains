import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private _userService: UserService) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._userService.getUserLoggedIn();
  }
}
