import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DirectionActions from '../actions/direction.actions';
import { GenericService } from '../generic.service';

@Injectable()
export class DirectionEffects {

  loadDirection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DirectionActions.loadDirection),
      mergeMap(() =>
        this.genericService.getdata('directions').pipe(
          map(direction => DirectionActions.loadDirectionSuccess({ direction })),
          catchError(error => of(DirectionActions.loadDirectionFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private genericService: GenericService
  ) {}
}
