import { XeRateService } from './../shared/services/pets.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as XeRateActions from './pets.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class XeRateEffects {
  loadXERates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(XeRateActions.loadPets),
      mergeMap(() =>
        this.petService.loadXERates().pipe(
          map((pets) => XeRateActions.loadPetsSuccess({ pets })),
          catchError((error) => of(XeRateActions.loadPetsFail(error)))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private petService: XeRateService
  ) {}
}
