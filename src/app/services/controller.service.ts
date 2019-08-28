import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const commentsUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

@Injectable({
  providedIn: 'root'
})

export class ControllerService {

  // Injecting HttpClient module into the constructor
  constructor(private http: HttpClient) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // logging error to console
      console.error(error); 

      // Returns an empty array while keeping the array running.
      return of(result as T);
    };
  }


  // get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(postsUrl)
      .pipe(
        tap(posts => console.log('fetched posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  // gets users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(usersUrl)
      .pipe(
        tap(users => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }


  // get comments
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(commentsUrl)
      .pipe(
        tap(comments => console.log('fetched comments')),
        catchError(this.handleError('getUsers',[]))
      );
  }

}
