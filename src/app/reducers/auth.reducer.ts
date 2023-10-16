import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, state => ({ ...state, isAuthenticated: true })),
  on(AuthActions.loginFailure, state => ({ ...state, isAuthenticated: false })),
);

