import { createAction, props } from '@ngrx/store';

export const loadPublication = createAction('[Publication] Load Publication');
export const loadPublicationSuccess = createAction('[Publication] Load Publication Success', props<{ publication: any[] }>());
export const loadPublicationFailure = createAction('[Publication] Load Publication Failure', props<{ error: any }>());