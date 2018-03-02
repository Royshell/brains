import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.less']
})
export class TopRightComponent implements OnInit {

  @Input() profileImageURL: string;
  @Input() username: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    //mocks
    this.profileImageURL = 'http://d3m2ca683sarz5.cloudfront.net/wp-content/uploads/2017/06/20072907/Brooke-Shields-D-61.jpg'
    this.username = 'brooke'
  }

}
