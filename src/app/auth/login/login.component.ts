import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.message = new Message('danger', '', false);
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text, true);
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
            window.localStorage.setItem('user', JSON.stringify(user))
            this.authService.login();
            // todo this.router.navigate(['']);
          } else {
            console.log('wrong pass');
            this.showMessage('wrong password', 'danger');
          }

        } else {
          console.log('wrong user');
          this.showMessage('The User with login ' + formData.login + ' is not exist', 'danger');
        }
      });
  }
}
