import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-event-list',
  template: `
  <app-navbar-nav></app-navbar-nav>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
