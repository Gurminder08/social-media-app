import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from './utils';
import { SERVER_URL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

    // get comments
    getComments(postId : number): Observable<Comment[]> {
      return this.http.get<Comment[]>(`${SERVER_URL}/comments?postId=${postId}`)
        .pipe(
          tap(comments => console.log('fetched comments')),
          catchError(handleError('getUsers',[]))
        );
    }
    
}
