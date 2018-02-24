import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.less']
})
export class EmailLoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private _authenticationService: AuthenticationService, private _userService: UserService,
              private router: Router) { }

  ngOnInit() {}
  
  private onSubmit() {
    const user: User = {
      username: this.username,
      password: this.password
    };
    if (this._authenticationService.authenticateUserMock(user)) {
      this._userService.setUserLoggedIn(true);
      console.log('boom!');
      this.router.navigate(['dashboard']);
    }
  }
}
