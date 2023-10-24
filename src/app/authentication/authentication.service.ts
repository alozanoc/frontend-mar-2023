import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageSubject } from '../../shared/localstorage/LocalStorageSubject';

interface User {
  fullName: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly authenticatedUser = new LocalStorageSubject<User | null>('AUTH_USER',null);

  readonly router = new Router();

  isAuthenticated() {
    return this.authenticatedUser.value !== null;
  }

  async login(username: string, password: string) {
    if (username === 'admin' && password==='admin') {
      this.authenticatedUser.next({
        fullName: 'Ali Lozano',
        username: 'admin'
      })

      await this.router.navigate(['/intranet'])
      console.log('authenticated')
    } else {
      this.authenticatedUser.next(null);
    }
  }
  async logout() {
    console.log('logout')
    this.authenticatedUser.next(null);
    await this.router.navigate(['/login'])
  }
}
