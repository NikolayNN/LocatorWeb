
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';


@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUserByLogin(login: string): Observable<User> {
    return this.http.get(`http://localhost:8080/user?login=${login}`)
      .map((response: Response) => response.json())
      .map((user: User) => user.id > 0 ? user : undefined);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:8080/user?email=${email}`)
      .map((response: Response) => response.json())
      .map((user: User) => user.id > 0 ? user : undefined);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:8080/user', user)
      .map((response: Response) => response.json());
  }
}

