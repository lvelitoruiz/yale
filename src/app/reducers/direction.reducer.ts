import { createReducer, on } from '@ngrx/store';
import * as DirectionActions from '../actions/direction.actions';

export interface DirectionState {
  direction: any[];
  error: any;
}

export const initialDirectionState: DirectionState = {
  direction: [],
  error: null,
};

export const directionReducer = createReducer(
  initialDirectionState,
  on(DirectionActions.loadDirectionSuccess, (state, { direction }) => ({
    ...state,
    direction,
    error: null,
  })),
  on(DirectionActions.loadDirectionFailure, (state, { error }) => ({
    ...state,
    direction: [],
    error,
  }))
);
