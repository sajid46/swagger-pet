import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as PetActions from './pet.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PetService } from '../shared/service/pet.service';

@Injectable()
export class PetEffects {
  loadPets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PetActions.loadPets),
      mergeMap(() =>
        this.petService.loadPets().pipe(
          map((pets) => PetActions.loadPetsSuccess({ pets })),
          catchError((error) => of(PetActions.loadPetsFail(error)))
        )
      )
    );
  });

  loadPet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PetActions.loadPet),
      mergeMap((action) =>
        this.petService.loadPet(action.id).pipe(
          map((pet) => PetActions.loadPetSuccess({ pet })),
          catchError((error) => of(PetActions.loadPetFail(error)))
        )
      )
    );
  });
  // loadPendingPets$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(PetActions.loadPets),
  //     mergeMap(() =>
  //       this.petService.loadPendingPets().pipe(
  //         map((pets) => PetActions.loadPetsSuccess({ pets })),
  //         catchError((error) => of(PetActions.loadPetsFail(error)))
  //       )
  //     )
  //   );
  // });

  // loadSoldPets$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(PetActions.loadPets),
  //     mergeMap(() =>
  //       this.petService.loadSoldPets().pipe(
  //         map((pets) => PetActions.loadPetsSuccess({ pets })),
  //         catchError((error) => of(PetActions.loadPetsFail(error)))
  //       )
  //     )
  //   );
  // });

  constructor(private actions$: Actions, private petService: PetService) {}
}
