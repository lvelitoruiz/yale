import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ImagesActions from '../actions/images.actions';
import { GenericService } from '../generic.service';

@Injectable()
export class ImagesEffects {

  loadImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImagesActions.loadImages),
      mergeMap(() =>
        this.genericService.getdata('bgs').pipe(
          map(images => ImagesActions.loadImagesSuccess({ images })),
          catchError(error => of(ImagesActions.loadImagesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private genericService: GenericService
  ) {}
}
