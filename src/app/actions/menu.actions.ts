import { createAction, props } from '@ngrx/store';

export const loadMenu = createAction('[Menu] Load Menu');
export const loadMenuSuccess = createAction('[Menu] Load Menu Success', props<{ menu: any[] }>());
export const loadMenuFailure = createAction('[Menu] Load Menu Failure', props<{ error: any }>());