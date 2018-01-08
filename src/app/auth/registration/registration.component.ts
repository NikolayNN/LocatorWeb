import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/user.model';
import {UsersService} from '../../shared/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkForEmail.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'login': new FormControl(null, [Validators.required], this.checkForLogin.bind(this)),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
    console.log(this.form);
  }

  onSubmit() {
    const {email, password, login} = this.form.value;
    const user = new User(email, password, login);
    this.userService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });
  }

  checkForLogin(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByLogin(control.value)
        .subscribe((user: User) => {
          if (!(user === undefined) && user.id > 0) {
            resolve({forbiddenLogin: true});
          } else {
            resolve(null);
          }
        });
    });
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (!(user === undefined) && user.id > 0) {
            resolve({forbiddenEmail: true});
          } else {
            resolve(null);
          }
        });
    });
  }

}
