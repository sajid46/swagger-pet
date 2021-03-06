import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  }

  saveUser(newUserForm: FormGroup) {
    this.store.dispatch(PetActions.saveUser({ newUserForm }));
  }

  constructor(private store: Store) {}
}
