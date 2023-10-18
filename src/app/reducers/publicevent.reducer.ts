import { createReducer, on } from '@ngrx/store';
import * as PubliceventActions from '../actions/publicevent.actions';

export interface PubliceventState {
  publicevent: any[];
  error: any;
}

export const initialPubliceventState: PubliceventState = {
  publicevent: [],
  error: null,
};

export const publiceventReducer = createReducer(
    initialPubliceventState,
  on(PubliceventActions.loadPublicEventSuccess, (state, { publicevent }) => ({
    ...state,
    publicevent,
    error: null,
  })),
  on(PubliceventActions.loadPublicEventFailure, (state, { error }) => ({
    ...state,
    publicevent: [],
    error,
  }))
);