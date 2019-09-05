import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SERVER_URL } from '../../environments/environment';
import { Post } from '../models/post';
import { handleError } from './utils';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${SERVER_URL}/posts`)
      .pipe(
        tap(posts => console.log('fetched posts')),
        catchError(handleError('getPosts', []))
      );
  }

}
