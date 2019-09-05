import { Observable, of} from 'rxjs';

export function handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // logging error to console
      console.error(error); 

      // Returns an empty array while keeping the array running.
      return of(result as T);
    };
}
