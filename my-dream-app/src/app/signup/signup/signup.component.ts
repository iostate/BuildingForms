import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users/users-component/users.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbidden = true;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male'),
        'password': new FormControl(null, Validators.required),
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    const name = this.signupForm.value.userData.name;
    console.log(name);
    const email = this.signupForm.value.userData.email;
    console.log(email);
    const gender = this.signupForm.value.userData.gender;
    console.log(gender);
    const password = this.signupForm.value.userData.password;
    console.log(password);

    this.usersService.addUser(new User(name, email, password));

  }


}
