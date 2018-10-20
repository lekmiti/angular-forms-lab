import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import { map } from 'rxjs/operators';
import {catchError, tap} from 'rxjs/internal/operators';




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
        tap(_ => console.log(`fetching user: ${givenUser.userName}`)),
        map(users => users[0]),
        map(user => user.userName === givenUser.userName && user.password === givenUser.password),
        catchError(this.handleError('isValid', `could not fetch user: ${givenUser.userName}`, false))
      );
  }

  private handleError<T> (operation = 'operation', message: string, result?: T) {
    return (error: any): Observable<T> => {
       console.error(error);
       console.log(`${operation} failed: ${message}`);
       return of(result as T);
    };
  }

}
