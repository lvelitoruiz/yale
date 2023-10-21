import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  response: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  response: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { response }) => ({ ...state, isAuthenticated: true, response })),
  on(AuthActions.loginFailure, state => ({ ...state, isAuthenticated: false })),
  on(AuthActions.logout, () => initialState),
);

