import { createAction, props } from '@ngrx/store';

export const loadPublicEvent = createAction('[PublicEvent] Load PublicEvent');
export const loadPublicEventSuccess = createAction('[PublicEvent] Load PublicEvent Success', props<{ publicevent: any[] }>());
export const loadPublicEventFailure = createAction('[PublicEvent] Load PublicEvent Failure', props<{ error: any }>());