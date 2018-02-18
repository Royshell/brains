import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.less']
})
export class EmailLoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }
  
  private onSubmit() {
  }
}
