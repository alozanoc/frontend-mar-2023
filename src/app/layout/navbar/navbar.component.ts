import { Component, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly layoutService = inject(LayoutService)
  readonly authenticationService = inject(AuthenticationService)

  get fullName() {
    return this.authenticationService.authenticatedUser.value?.fullName ?? 'Invitado'
  }

  logout() {
    this.authenticationService.logout();
  }
}
