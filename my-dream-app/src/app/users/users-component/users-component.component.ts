import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) { }



  ngOnInit() {
    // Initialize the users in this component
    this.users = this.usersService.getUsers();
    // Subscribe to any changes in the users
    this.usersService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
    });
  }

}
