import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as PetActions from '../state/pet.actions';
import { getSelPets } from './pet.reducer';

@Injectable({
  providedIn: 'root',
})
export class PetFacade {
  pets$ = this.store.pipe(select(getSelPets));

  loadPets(): void {
    this.store.dispatch(PetActions.loadPets());
    this.store.dispatch(PetActions.loadPendingPets());
    this.store.dispatch(PetActions.loadSoldPets());
  }

  constructor(private store: Store) {}
}
