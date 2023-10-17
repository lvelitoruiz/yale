import { createAction, props } from '@ngrx/store';

export const loadPresentation = createAction('[Presentation] Load Presentation');
export const loadPresentationSuccess = createAction('[Presentation] Load Presentation Success', props<{ presentation: any[] }>());
export const loadPresentationFailure = createAction('[Presentation] Load Presentation Failure', props<{ error: any }>());