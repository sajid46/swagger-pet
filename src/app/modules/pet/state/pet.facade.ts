import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as PetActions from '../state/pet.actions';
import { getSelPet, getSelPets } from './pet.reducer';

@Injectable({
  providedIn: 'root',
})
export class PetFacade {
  pets$ = this.store.pipe(select(getSelPets));
  pet$ = this.store.pipe(select(getSelPet));

  loadPets(): void {
    this.store.dispatch(PetActions.loadPets());
    // this.store.dispatch(PetActions.loadPendingPets());
    // this.store.dispatch(PetActions.loadSoldPets());
  }

  loadPet(id: number): void {
    this.store.dispatch(PetActions.loadPet({ id }));
    // this.store.dispatch(PetActions.loadPendingPets());
    // this.store.dispatch(PetActions.loadSoldPets());
  }

  constructor(private store: Store) {}
}
