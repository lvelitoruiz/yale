import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PublicationActions from '../actions/publications.actions';
import { GenericService } from '../generic.service';

@Injectable()
export class PublicationEffects {

  loadPublication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicationActions.loadPublication),
      mergeMap(() =>
        this.genericService.getdata('publications').pipe(
          map(publication => PublicationActions.loadPublicationSuccess({ publication })),
          catchError(error => of(PublicationActions.loadPublicationFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private genericService: GenericService
  ) {}
}
