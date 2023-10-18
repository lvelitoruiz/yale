import { createAction, props } from '@ngrx/store';

export const loadImages = createAction('[Images] Load Images');
export const loadImagesSuccess = createAction('[Images] Load Images Success', props<{ images: any[] }>());
export const loadImagesFailure = createAction('[Images] Load Images Failure', props<{ error: any }>());