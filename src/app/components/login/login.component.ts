import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User;
  users: User[] = [];
  isValid: Boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.model = new User('', '');
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSubmit(): void {
     this.userService.isValid(this.model).subscribe(res =>  this.isValid = res);
   }

}
