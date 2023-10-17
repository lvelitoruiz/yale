import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as MenuActions from '../actions/menu.actions';
import { MenuService } from '../menu.service';

@Injectable()
export class MenuEffects {

  loadMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.loadMenu),
      mergeMap(() =>
        this.menuService.getMenu().pipe(
          map(menu => MenuActions.loadMenuSuccess({ menu })),
          catchError(error => of(MenuActions.loadMenuFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private menuService: MenuService
  ) {}
}
