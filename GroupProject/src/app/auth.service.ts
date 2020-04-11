import { Injectable } from '@angular/core';
import { User, USER } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = USER;
  constructor() { }
  
  getUserDetails(): Observable<User> {
    return of(this.user);
  }
}
