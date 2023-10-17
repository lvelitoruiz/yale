import { createAction, props } from '@ngrx/store';

export const loadDirection = createAction('[Direction] Load Direction');
export const loadDirectionSuccess = createAction('[Direction] Load Direction Success', props<{ direction: any[] }>());
export const loadDirectionFailure = createAction('[Direction] Load Direction Failure', props<{ error: any }>());