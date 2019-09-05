import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { handleError } from './utils';
import { SERVER_URL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    // gets users
    getUser( userId: number ): Observable<User> {
      return this.http.get<User>(`${SERVER_URL}/users/${userId}`)
        .pipe(
          tap(users => console.log('fetched users')),
          catchError(handleError('getUser', <User>{}))
        );
    }

}
