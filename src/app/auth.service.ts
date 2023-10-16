import { Injectable } from '@angular/core';
import axios from 'axios';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from './actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private store: Store) {}

  login(username: string, password: string): Observable<any> {
    const loginData = JSON.stringify({ username, password });
  
    return from(
      axios.post(`${this.apiUrl}`, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).pipe(
      map((response) => {
        this.store.dispatch(AuthActions.loginSuccess());
        return response; 
      }),
      catchError((error) => {
        this.store.dispatch(AuthActions.loginFailure({ error: error }));
        return of();
      })
    );
  }  
}
