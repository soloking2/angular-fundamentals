import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class AuthService {
  currentUser: IUser;

  constructor(private router: Router, private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    // tslint:disable-next-line: prefer-const
    let loginInfo = { username: userName, password: password };
    // tslint:disable-next-line: prefer-const
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options).pipe(tap(data => {
      this.currentUser = <IUser> data['user'];
    })).pipe(catchError(err => {
      return of(false);
    }));
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    // tslint:disable-next-line: prefer-const
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity').pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = <IUser> data;
      }
    })).subscribe();
  }

  logout() {
    this.currentUser = undefined;
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }
}
