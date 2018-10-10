import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserByUserName(userName: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/?userName=${userName}`);
  }

  isValid(givenUser: User): Observable<boolean> {
    return this.getUserByUserName(givenUser.userName)
      .pipe(
        map(users => users[0]), map(user => user.userName === givenUser.userName && user.password === givenUser.password)
      );
  }
}
