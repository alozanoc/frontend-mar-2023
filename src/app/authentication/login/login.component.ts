import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authenticationService = inject(AuthenticationService)

  authentication = {
    username: 'admin',
    password: ''
  }

  login() {
    console.log('try to login')
    this.authenticationService.login(this.authentication.username, this.authentication.password);
  }

}
