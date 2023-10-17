import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PresentationActions from '../actions/presentation.actions';
import { GenericService } from '../generic.service';

@Injectable()
export class PresentationEffects {

  loadPresentation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PresentationActions.loadPresentation),
      mergeMap(() =>
        this.genericService.getdata('presentations').pipe(
          map(presentation => PresentationActions.loadPresentationSuccess({ presentation })),
          catchError(error => of(PresentationActions.loadPresentationFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private genericService: GenericService
  ) {}
}
