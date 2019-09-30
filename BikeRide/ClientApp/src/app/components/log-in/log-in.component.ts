import { Component, OnInit } from '@angular/core';
import { LogInService } from './log-in.service';
import { SignInModel } from './log-in.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [LogInService]
})
export class LogInComponent implements OnInit {

  signInModel: SignInModel = new SignInModel;

  constructor(private logInService: LogInService) { }

  ngOnInit() {
  }

  login() {
    if (!(this.signInModel.username == null && this.signInModel.password == null) ) {
      let _username = this.signInModel.username;
      let _password = this.signInModel.password;

      for (let i = 0; i <= _username.length; i++) {
        if (_username.charAt(i) === ' ') {
          _username.replace(/\s/g, "");
        }
      }

      for (let i = 0; i <= _password.length; i++) {
        if (_password.charAt(i) === '/') {
          _password.replace(/\s/g, "");
        }
      }

      for (let i = 0; i <= _password.length; i++) {
        if (_password.charAt(i) === '.') {
          _password.replace(/\s/g, "");
        }
      }

      this.logInService.login(this.signInModel);
    } else {(console.log('failed')); }
  }
}
