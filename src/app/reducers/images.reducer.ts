import { createReducer, on } from '@ngrx/store';
import * as ImagesActions from '../actions/images.actions';

export interface ImagesState {
  images: any[];
  error: any;
}

export const initialImagesState: ImagesState = {
  images: [],
  error: null,
};

export const imagesReducer = createReducer(
    initialImagesState,
  on(ImagesActions.loadImagesSuccess, (state, { images }) => ({
    ...state,
    images,
    error: null,
  })),
  on(ImagesActions.loadImagesFailure, (state, { error }) => ({
    ...state,
    images: [],
    error,
  }))
);