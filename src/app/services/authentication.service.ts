import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable()
export class AuthenticationService {

  constructor(private _http: HttpClient) { }
  
  public authenticateUser() {
    //TODO POST Request
  }

  public authenticateUserMock(user: User): boolean {
    if (user.username === 'admin' && user.password === 'admin') {
      return true;
    }
    return false;
  }
}
