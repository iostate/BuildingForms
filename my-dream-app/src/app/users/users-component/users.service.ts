/**
 * Add functionality to edit a user.
 */

import { User } from '../../shared/user.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService  {

  // Use this to transmit any changes to the users
  usersChanged = new Subject<User[]>();
  private users: User[] = [
    new User('Timothy', 'tim@buchka.com', '88a3bcde'),
    new User('Rambo', 'rambo@buchka.com', 'eeb3dc9a3e')
  ];

  /**
   * Return a copy of the users in this service.
   * @returns {User[]}
   */
  getUsers() {
    return this.users.slice();
  }

  /**
   * Add a user to the list of users and push changes through Subject.
   * @param {User} user
   */
  addUser(user: User) {


    // DEBUG
    // Print the length of the users after it has been updated
    this.printUserLength();

    this.users.push(user);

    // Bug - Calling the method instead of the slice() ?
    // Return a copy of all the users inside the list
    this.usersChanged.next(this.users.slice());

    // Print success message that the user has been added
    console.log(user.name + ' has been pushed to users!');

    // DEBUG
    // Print the length of the users after it has been updated
    this.printUserLength();

    // Print names of everyone in the users array
    this.printNamesOfUsers()
  }

  printUserLength() {
    console.log('Current users length: ' + this.users.length);
  }

  printNamesOfUsers() {
    this.users.forEach(
      function(element) {
        console.log(element.name);
      }
    );
  }
}
