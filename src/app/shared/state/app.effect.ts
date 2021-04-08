import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from '../service/app.service';

@Injectable()
export class AppEffects {
  //   loadPets$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(AppActions.saveUser),
  //       mergeMap((action) =>
  //         this.appService.saveUser(action.user)
  //       )
  //     );
  //   });

  constructor(private actions$: Actions, private appService: AppService) {}
}
