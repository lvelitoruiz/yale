import { createReducer, on } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';

export interface MenuState {
  menu: any[];
  error: any;
}

export const initialMenuState: MenuState = {
  menu: [],
  error: null,
};

export const menuReducer = createReducer(
  initialMenuState,
  on(MenuActions.loadMenuSuccess, (state, { menu }) => ({
    ...state,
    menu,
    error: null,
  })),
  on(MenuActions.loadMenuFailure, (state, { error }) => ({
    ...state,
    menu: [],
    error,
  }))
);
