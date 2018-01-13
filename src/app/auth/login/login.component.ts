import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {WarningUiMessage} from '../../shared/models/warning-ui-message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: WarningUiMessage;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.message = new WarningUiMessage('danger', '', false);

    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage({text: 'Now you can sign in', type: 'success', show: true});
      }
    });

    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: WarningUiMessage) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
      this.message.show = false;
    }, 5000);
  }


  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByLogin(formData.login)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            // todo this.router.navigate(['']);
          } else {
            console.log('wrong pass');
            this.showMessage({text: 'wrong password', type: 'danger', show: true});
          }

        } else {
          console.log('wrong user');
          this.showMessage({
            text: 'The User with login ' + formData.login + ' is not exist',
            type: 'danger',
            show: true
          });
        }
      });
  }
}
