import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PublicEventActions from '../actions/publicevent.actions';
import { GenericService } from '../generic.service';

@Injectable()
export class PublicEventEffects {

  loadPublicEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicEventActions.loadPublicEvent),
      mergeMap(() =>
        this.genericService.getdata('publicevents').pipe(
          map(publicevent => PublicEventActions.loadPublicEventSuccess({ publicevent })),
          catchError(error => of(PublicEventActions.loadPublicEventFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private genericService: GenericService
  ) {}
}
