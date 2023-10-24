import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  readonly sidebarOpen = new BehaviorSubject(true);

  constructor() { }

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value)
  }
}
