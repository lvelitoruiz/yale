import { createReducer, on } from '@ngrx/store';
import * as PublicationActions from '../actions/publications.actions';

export interface PublicationState {
  publication: any[];
  error: any;
}

export const initialPublicationState: PublicationState = {
  publication: [],
  error: null,
};

export const publicationReducer = createReducer(
    initialPublicationState,
  on(PublicationActions.loadPublicationSuccess, (state, { publication }) => ({
    ...state,
    publication,
    error: null,
  })),
  on(PublicationActions.loadPublicationFailure, (state, { error }) => ({
    ...state,
    publication: [],
    error,
  }))
);