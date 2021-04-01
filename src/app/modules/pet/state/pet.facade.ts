import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as XeRateActions from '../state/pets.actions';
import { getXERates } from './pets.reducer';

@Injectable({
  providedIn: 'root',
})
export class XeRateFacade {
  pets$ = this.store.pipe(select(getXERates));

  loadXERates(): void {
    this.store.dispatch(XeRateActions.loadPets());
  }

  constructor(private store: Store) {}
}
