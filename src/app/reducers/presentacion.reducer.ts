import { createReducer, on } from '@ngrx/store';
import * as PresentationActions from '../actions/presentation.actions';

export interface PresentationState {
  presentation: any[];
  error: any;
}

export const initialPresentationState: PresentationState = {
  presentation: [],
  error: null,
};

export const presentationReducer = createReducer(
    initialPresentationState,
  on(PresentationActions.loadPresentationSuccess, (state, { presentation }) => ({
    ...state,
    presentation,
    error: null,
  })),
  on(PresentationActions.loadPresentationFailure, (state, { error }) => ({
    ...state,
    presentation: [],
    error,
  }))
);